---
name: tdd
description: >-
  TDD for this Stencil repo: logic in src/core classes (Controller/Utils),
  BehaviorSubject state, Stencil wires streams with componentUtil.subscribe
  (auto-unsubscribe) and ramda pipe, no mocks, cmd return types (never null),
  exhaustive matchCommand handlers, failing tests reviewed before
  implementation, one class per red-review-green loop. Tests live in
  src/core/__tests__. src/core stays free of Stencil/ramda/test-runner; RxJS
  only via src/lib/rx. Agent runs class tests with bun test. Test files stay
  portable (no bun:test imports). Test only classes wired from Stencil
  components. Use when writing unit tests, TDD, controllers, class-based
  logic, LoadCommand, matchCommand, bun test, ramda pipe, componentUtil, or
  fearless refactoring tests.
disable-model-invocation: true
---

# TDD (youtube-frontend)

This repo. Stencil for DOM. Logic lives in `src/core` classes. Tests hit public methods. Stencil only renders DOM and wires the class.

## Repo rules (this project)

- The component will have minimal wiring logic, use "pipe" from ramda library to compose functions which helps in wiring logic
- The tests, will be placed under src/core/__tests__
- Core folder should be independent of any library or framework, as tests are in it, so this applies to tests too

`src/core`: no Stencil, ramda, axios, Jest, Bun, Cypress, Dexie. RxJS only through `src/lib/rx` (`BehaviorSubject` / `Observable`). No `rxjs/testing` / `TestScheduler` in core or tests.

`src/core/__tests__`: import the class and `src/core` types only. No Stencil, ramda, RxJS, test-runner imports. Read state with `getState()`.

Ramda `pipe`, `matchCommand`, and `componentUtil` belong in the Stencil component (or `src/utils`), never in `src/core`. Import `pipe` from `src/lib/fp` (same pattern as RxJS via `src/lib/rx`). Never `from "ramda"`.

## Hard rules

- Fast unit tests. High confidence. Tests independent of any framework and library.
- Agent runs Controller/Utils tests with `bun test src/core/__tests__/TheClass.test.ts` (install `bun` if missing; do not switch runner for the TDD loop). Test **source** must also pass the app’s existing runner (Jest). Intersection only: globals `describe` / `it` / `expect` — no test-runner imports.
- Never add Bun-specific APIs, imports, config, or types to make `bun test` pass (`bun:test`, `import { … } from 'bun:test'`, Bun-only matchers, `bunfig.toml` / preload just for these files). That breaks the app suite.
- If implementation uses a library internally, do not mock it. Core may import RxJS only from `src/lib/rx`. Do not mock it.
- No mocks of any kind.
- Tests create a class instance and exercise public methods.
- Add tests only for classes consumed in Stencil (component). Do not add a test file for a class consumed only by another class — cover it by testing the consumer. Tests are Stencil-independent; only component-consumed classes need their own tests.
- Keep public methods as few as possible.
- No side effects in these classes (no API calls). Prepare the call; consume a `Result`. Never invoke services/HTTP inside the class.
- Always use classes instead of standalone functions (so tests can construct an instance). Exception: copy `matchCommand` as a shared util function — not a class.
- Class does not render DOM. Class owns all logic. Stencil components own DOM and wiring only.
- All public class methods are arrow-function properties (`readonly handleSubmit = (): Cmd => { … }`), not prototype methods. Stencil may pass them detached (`onClick={this.controller.handleSubmit}`), and a prototype method loses `this`. Private helpers may stay prototype methods; if written as arrow properties, mark them `private readonly`.
- Every arrow-function property is `readonly` (`readonly getState = …`, `private readonly describeStatusChange = …`). They are never reassigned; SonarQube `typescript:S2933` flags them otherwise.
- Tests are documentation. Prefer readable names and examples over clever helpers.
- Tests comment `// Arrange`, `// Act`, `// Assert` for each step.
- Never return `null` (or `undefined`) from class methods. If there is nothing to do, return a cmd (`{ type: 'skip' }` or domain-equivalent). Use a discriminated cmd union as the return type when the UI must decide whether to run a side effect.
- Handle cmds exhaustively with `matchCommand` and a `Record<Cmd['type'], Handler>` map. No `if (command.type === …)`. Missing cmd type must be a TypeScript error.

## TDD gate (mandatory)

**One class per loop.** When a feature needs several classes, do not write tests for all of them up front. Pick one class, run the full loop below to green, then start the next class. Order: consumer-facing class first (the one Stencil wires), then classes it depends on only if they turn out to need their own tests (see [Tests](#tests)).

For **each** class, in order:

1. Write **failing** tests for this class only. Confirm red with `bun test src/core/__tests__/TheClass.test.ts`.
2. **Stop. Get them reviewed by the user.** Do not write implementation yet. Do not write tests for the next class yet.
3. After user approves, write the minimum class/implementation to pass. Confirm green with the same `bun test` command.
4. Refactor implementation without changing tests when possible. Re-run `bun test` on that file.
5. Only now move to the next class and restart at step 1.

Never skip step 2. Never batch test files for multiple classes into one review.

## Naming and scope

Always create a class whose name is linked to business needs, so that refactoring doesn't mean I need to modify tests. Idea is fearless refactoring without changing tests.

Classes with `asObservable` + `getState` end with `Controller`. Put them in `src/core`.

Example: component `trending-page` is a business thing. If it is a UI component, its class can be `TrendingPageController`.

Doesn't mean each component will have a controller class. Child components can use the controller by passing the controller as a prop.

If a child is complex, managing its own state, and also representing a business entity, create a separate controller class for it too. Give that class its own tests only if Stencil consumes it. If only another class consumes it, skip its test file and cover behavior through the consumer’s tests.

If the component is not representing anything in UI, use `Utils` in the class name instead of `Controller`. `Controller` is for components which are rendering DOM. Non-DOM should use `Utils`.

| Kind | Suffix | When |
|------|--------|------|
| DOM-backed business UI | `Controller` | Stencil wires `asObservable` via `componentUtil.subscribe` |
| Non-DOM logic | `Utils` | No render surface |

One class per business entity, not per file/component. Split only when a child is its own business entity with its own state that parent tests cannot cover.

## State

Keep state in the core class on a `BehaviorSubject`. Expose `asObservable` + `getState`. Import `BehaviorSubject` from `src/lib/rx`.

Only `patchState` may `next`. Other methods pass a partial and call `patchState`.

Do **not** add a callback `subscribe` on the controller. UI uses `componentUtil(this).subscribe(observable, next)` — same helper as the rest of this repo. It unsubscribes on `disconnectedCallback`. Never `observable.subscribe(...)` in a component (leak).

```ts
import { BehaviorSubject, Observable } from "../lib/rx"

class OrderLineItemsTableController {
  private readonly state$ = new BehaviorSubject<State>(initialState);

  readonly asObservable = (): Observable<State> => this.state$.asObservable();

  readonly getState = (): State => this.state$.getValue();

  private patchState(partial: Partial<State>): void {
    this.state$.next({ ...this.getState(), ...partial });
  }
}
```

`asObservable` and `getState` are `readonly` arrow properties. Same rule for every public method (see [Hard rules](#hard-rules)).

Stencil: hold the instance as a field. Do not construct a new controller each render.

```ts
const compUtil = componentUtil(this)
compUtil.subscribe(this.controller.asObservable(), state => {
  this.lineItems = state.lineItems
})
```

Wiring + `pipe`: [examples.md](examples.md).

## Commands (no null returns)

A **cmd** is an instruction *out* of the class, *into* UI wiring. Discriminated on `type`. Example:

```ts
type LoadCommand =
  | { type: 'skip' }
  | { type: 'fetch'; queryParams: QueryParams; append: boolean };
```

- `skip` = do not run the effect. Not `null`.
- Other variants carry everything the UI needs to run the effect (service args, query params).
- Name the union for the job (`LoadCommand`, `SubmitCommand`), not a generic `Action`.
- State fields may still be `string | null`. Method **return types** may not.

UI runs cmds with `matchCommand` so every `type` has a handler. Copy [matchCommand.ts](matchCommand.ts) into `src/utils/matchCommand.ts` if it is missing. Do not put it in `src/core`. Do not reimplement with `if`/`switch`. `matchCommand` is a shared type util, not business logic — do not wrap it in a Controller/Utils class.

Compose with ramda `pipe` in the component:

```ts
import { pipe } from "../../lib/fp"

pipe(controller.handleOpenChange, (command) =>
  matchCommand(command, {
    fetch: ({ queryParams }) => {
      void execute(fetchOptions, queryParams)
    },
    skip: () => {},
  }),
)
```

## Side effects (API / services)

Controller never runs the effect. UI (or existing Service layer) does.

1. Action method named for the UI action (submit button → `handleSubmit`). Returns a **cmd** (or the service args wrapped in a cmd) — never `null`.
2. If the repo already uses services, cmd payload matches that service method — not a parallel HTTP client.
3. Effect returns a rust-like `Result<SuccessResponse, FailResponse>`.
4. Controller has a result method (`handleSubmitResult`) that takes that `Result` and updates state. Tests call it directly. No mocks.

```ts
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

class OrderFormController {
  readonly handleSubmit = (): CreateOrderServiceArgs => {
    return { lineItems: this.getState().lineItems };
  };

  readonly handleSubmitResult = (
    result: Result<CreateOrderSuccess, CreateOrderFailure>,
  ): void => {
    if (result.ok) {
      this.patchState({
        submittedOrderId: result.value.orderId,
        submitError: null,
      });
      return;
    }
    this.patchState({
      submittedOrderId: null,
      submitError: this.describeFailure(result.error),
    });
  };

  private readonly describeFailure = (error: CreateOrderFailure): string =>
    error.message;
}
```

UI wiring (not in unit tests): ramda `pipe` + existing services.

```ts
const submit = pipe(controller.handleSubmit, async (args) => {
  const result = await toResult(ordersService.create(args))
  controller.handleSubmitResult(result)
})
```

Full example: [examples.md](examples.md).

## Tests

Add a `*.test.ts` only when the class is consumed from Stencil — a component constructs it or calls its methods. Tests stay framework-independent (class instance + public methods). That is why inner classes do not get their own tests: Stencil never sees them; the consumer class is the boundary.

Do **not** add tests for a class if another class is its only consumer. Put the cases on the consumer. Example: `LineQtyUtils` used only by `OrderLineItemsTableController` → test `OrderLineItemsTableController` only.

A class used by both Stencil and another class still gets tests — Stencil consumes it.

File: `src/core/__tests__/OrderLineItemsTableController.test.ts` (not `.tsx` — no DOM). Class: `src/core/OrderLineItemsTableController.ts`.

Agent command (TDD loop):

```bash
bun test src/core/__tests__/OrderLineItemsTableController.test.ts
```

Same file must still pass when Jest picks it up. Portable subset only:

- Globals: `describe`, `it`, `expect` (`toEqual`, `toBe`, `toThrow`, …). No `import` from `bun:test`, `vitest`, `@jest/globals`, or `jest`.
- No Bun-only, Jest-only, or Vitest-only APIs (`jest.mock`, `jest.fn`, `vi.fn`, `vi.mock`, fake timers, Bun matchers).
- No extra runner config (`bunfig.toml`, Jest/Vitest setup) just to make class tests run.
- No library imports in the test file (no RxJS, ramda, Stencil, `componentUtil`). Assert via `getState()`.

```ts
it('adds a line item with quantity 1', () => {
  // Arrange
  const controller = new OrderLineItemsTableController();

  // Act
  controller.addLineItem({ sku: 'ABC' });

  // Assert
  expect(controller.getState().lineItems).toEqual([
    { sku: 'ABC', quantity: 1 },
  ]);
});
```

- Every test comments the steps: `// Arrange`, `// Act`, `// Assert`.
- Arrange: `new TheClass(...)`.
- Act: public method (`handleSubmit`, `handleSubmitResult`, …).
- Assert: public read (`getState` or other public getters).
- Names describe business behavior, not implementation.
- Side-effect tests: assert cmd return value (`skip` vs payload variants); call `handle*Result` with a constructed `Result`. Never mock services.
- Agent verifies with `bun test <file>`. Do not change app or Bun config so one runner works and the other breaks.

## Implementation after review

- Pass tests with smallest public API.
- Hide internals (`private`). Tests never reach private fields.
- Public methods as `readonly` arrow properties so `this` survives when Stencil passes them as callbacks. Private arrow properties are `private readonly`.
- HTTP / services stay in UI wiring. Controller: cmd out, `Result` in. If `matchCommand` is missing, add it from this skill to `src/utils` before wiring.
- Component wiring: ramda `pipe` for cmd composition; `componentUtil.subscribe` for streams. No business logic in the component.

## Anti-patterns

- Importing ramda, Stencil, axios, or test-runner packages into `src/core` or `src/core/__tests__`
- Importing `rxjs` directly instead of `src/lib/rx`
- Importing `ramda` directly instead of `src/lib/fp`
- Listener-set / callback `subscribe` on the controller
- `controller.asObservable().subscribe(...)` (or any raw `.subscribe`) in a Stencil component — use `componentUtil(this).subscribe` so it unsubscribes on destroy
- Putting tests next to the class or under `src/components`
- Fat Stencil `componentWillLoad` / `componentDidLoad` instead of ramda `pipe` + `componentUtil.subscribe`
- Installing extra state libs only to hold controller state
- Constructing a new Controller each render
- `jest.mock` / `vi.mock` / `import { … } from 'bun:test'` / module mocks / fake timers to hide the store
- Bun-only test code or config so `bun test` passes but Jest fails (or the reverse)
- Calling services or `fetch` inside Controller/Utils
- Testing Stencil components for business rules
- Adding `FooUtils.test.ts` (or any class test) when `FooUtils` is only used by another class — test the consumer instead
- Standalone exported functions for logic that belongs on a class
- One Controller per tiny presentational child (pass parent controller as a prop)
- Public setters for every field
- Changing tests to match a refactor of internals
- Class method named `getSnapshot` — use `getState`
- Public prototype methods (`handleSubmit() { … }`) — `this` is lost when passed as `onClick={this.controller.handleSubmit}`; use arrow properties. Do not fix with `.bind(this)` in constructor or `() => this.controller.handleSubmit()` wrappers in JSX
- Arrow-function property without `readonly` (`handleSubmit = () => …`, `private describeStatusChange = () => …`) — SonarQube S2933 "never reassigned; mark it as `readonly`"
- Notifying subscribers from more than one method — only `patchState` may notify
- Returning `null` / `undefined` from a class method to mean “do nothing”
- `if` / `switch` on `command.type` instead of `matchCommand`
- Inventing a project-local matcher when [matchCommand.ts](matchCommand.ts) can be copied in
- Runner-specific matchers, globals, or config (Bun, Jest, or Vitest)
- Writing failing tests for several classes at once, then asking for one combined review — one class per red → review → green loop
