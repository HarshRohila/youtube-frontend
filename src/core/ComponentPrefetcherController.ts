import { concatMap, from, SchedulerLike, timer } from "../lib/rx"
import { AnyComponent } from "./types"

export class ComponentPrefetcherController {
  constructor(private components: AnyComponent[], private scheduler?: SchedulerLike) {}

  createComp$ = () =>
    from(this.components).pipe(
      concatMap(comp =>
        timer(1000, this.scheduler).pipe(concatMap(() => from(this.flattenNames(comp))))
      )
    )

  private flattenNames(comp: AnyComponent): string[] {
    const { name, deps } = this.toComponentObject(comp)
    return [...deps.flatMap(dep => this.flattenNames(dep)), name]
  }

  private toComponentObject(comp: AnyComponent): { name: string; deps: AnyComponent[] } {
    const isArray = Array.isArray(comp)

    return {
      // @ts-ignore
      name: isArray ? comp[0] : comp,
      // @ts-ignore
      deps: isArray ? comp[1].deps : []
    }
  }
}
