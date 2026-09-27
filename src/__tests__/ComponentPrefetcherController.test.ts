import { TestScheduler } from "rxjs/testing"
import { ComponentPrefetcherController } from "../core/ComponentPrefetcherController"
import { AnyComponent } from "../core/types"

const appRootComponents: AnyComponent[] = [
  ["settings-page", { deps: ["mobile-view", "dropdown-server", "page-header", "li-server-instance"] }],
  ["a-playlist", { deps: ["video-player", "page-header"] }]
]

function runTest(run: (helpers: { testScheduler: TestScheduler }) => void) {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
  })
  testScheduler.run(() => run({ testScheduler }))
}

describe("ComponentPrefetcherController", () => {
  test("prefetches every root tree, deps before parent, 1s stagger", () => {
    const received: Array<{ frame: number; value: string }> = []
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })

    testScheduler.run(() => {
      const controller = new ComponentPrefetcherController(appRootComponents, testScheduler)
      controller.createComp$().subscribe(value => {
        received.push({ frame: testScheduler.frame, value })
      })
    })

    expect(received).toEqual([
      { frame: 1000, value: "mobile-view" },
      { frame: 1000, value: "dropdown-server" },
      { frame: 1000, value: "page-header" },
      { frame: 1000, value: "li-server-instance" },
      { frame: 1000, value: "settings-page" },
      { frame: 2000, value: "video-player" },
      { frame: 2000, value: "page-header" },
      { frame: 2000, value: "a-playlist" }
    ])
  })

  test("string-only entry emits that name after 1s", () => {
    runTest(({ testScheduler }) => {
      const controller = new ComponentPrefetcherController(["foo"], testScheduler)

      testScheduler.expectObservable(controller.createComp$()).toBe("1000ms (a|)", {
        a: "foo"
      })
    })
  })

  test("nested deps emit depth-first then parent", () => {
    runTest(({ testScheduler }) => {
      const nested: AnyComponent[] = [["parent", { deps: [["child", { deps: ["g"] }]] }]]
      const controller = new ComponentPrefetcherController(nested, testScheduler)

      testScheduler.expectObservable(controller.createComp$()).toBe("1000ms (abc|)", {
        a: "g",
        b: "child",
        c: "parent"
      })
    })
  })
})
