# TDD examples (this repo)

Classes live in `src/core`. Tests live in `src/core/__tests__`. Stencil components import both and stay thin.

## Controller + Stencil wiring (point-free `pipe` + `R.tap`)

`BehaviorSubject` in core (from `src/lib/rx`). UI subscribes with `componentUtil` — it unsubscribes on `disconnectedCallback`. Do not call `.subscribe` on the observable in the component.

Wiring is **point-free** where it helps: `pipe` for controller → effect chains; `R.tap` only inside a `pipe` when you need several ordered side effects on the same value. A single `subscribe` next handler stays a plain function — no `R.tap` wrapper.

```ts
// src/core/OrderLineItemsTableController.ts
import { BehaviorSubject, Observable } from "../lib/rx";

type LineItem = { sku: string; quantity: number };

type State = {
  lineItems: LineItem[];
};

const initialState: State = { lineItems: [] };

export class OrderLineItemsTableController {
  private readonly state$ = new BehaviorSubject<State>(initialState);

  readonly asObservable = (): Observable<State> => this.state$.asObservable();

  readonly getState = (): State => this.state$.getValue();

  private patchState(partial: Partial<State>): void {
    this.state$.next({ ...this.getState(), ...partial });
  }

  readonly addLineItem = (input: { sku: string }): void => {
    this.patchState({
      lineItems: [
        ...this.getState().lineItems,
        { sku: input.sku, quantity: 1 },
      ],
    });
  };
}
```

```tsx
import { Component, Host, State, h } from "@stencil/core";
import { pipe, R } from "../../lib/fp";
import { componentUtil } from "../../lib/app-state-mgt";
import { OrderLineItemsTableController } from "../../core/OrderLineItemsTableController";

@Component({ tag: "order-line-items-table", shadow: true })
export class OrderLineItemsTable {
  private readonly controller = new OrderLineItemsTableController();

  @State() lineItems: { sku: string; quantity: number }[] = [];

  componentWillLoad() {
    const applyState = (state: { lineItems: { sku: string; quantity: number }[] }) => {
      this.lineItems = state.lineItems;
    };
    const compUtil = componentUtil(this);
    pipe(this.controller.asObservable, state$ =>
      compUtil.subscribe(state$, applyState),
    )();
  }

  render() {
    return (
      <Host>
        {this.lineItems.map((item) => (
          <order-line-item-row sku={item.sku} quantity={item.quantity} />
        ))}
      </Host>
    );
  }
}
```

Click / navigation elsewhere: `onClick={pipe(this.controller.handleOpenSettings, pushPath(this.history))}`.

Stream `tap` operators should thread values through `pipe` + `R.tap`, not re-wrap controller calls in arrows when composition is enough.

Pass the same controller instance as a prop when a child needs it. Do not create a second Controller unless the child is its own business entity.

## Commands: skip instead of null

Controller returns a cmd. UI uses `matchCommand`. If the repo has no matcher, copy [matchCommand.ts](matchCommand.ts) to `src/utils/matchCommand.ts` (not `src/core` — matcher is wiring).

```ts
type QueryParams = { page: number; per_page: number };

type LoadCommand =
  | { type: "skip" }
  | { type: "fetch"; queryParams: QueryParams; append: boolean };

export class UserFilterController {
  private hasLoaded = false;

  readonly handleOpenChange = (isOpen: boolean): LoadCommand => {
    if (!isOpen || this.hasLoaded) {
      return { type: "skip" };
    }

    return {
      type: "fetch",
      queryParams: { page: 1, per_page: 50 },
      append: false,
    };
  };
}
```

```ts
it("skips fetch when the filter is closed", () => {
  // Arrange
  const controller = new UserFilterController();

  // Act
  const command = controller.handleOpenChange(false);

  // Assert
  expect(command).toEqual({ type: "skip" });
});
```

```ts
import { pipe } from "../../lib/fp";
import { matchCommand } from "../../utils/matchCommand";

const loadOptions = pipe(controller.handleOpenChange, command =>
  matchCommand(command, {
    fetch: ({ queryParams }) => {
      void execute(fetchUsers, queryParams);
    },
    skip: () => {},
  }),
);
```

Rx stream with two ordered effects on the same payload:

```ts
import { tap } from "../../lib/rx";
import { pipe, R } from "../../lib/fp";
import { pushPath } from "../../utils/pushPath";

const submitSearch$ = merge(suggestionClick$, searchSubmit$).pipe(
  tap(
    pipe(
      R.tap(submitSearch),
      R.tap(pipe(controller.handleOpenSearch, pushPath(history))),
    ),
  ),
);
```

Do not `if (command.type === "fetch")`. Add a new `LoadCommand` variant → TS error until the map handles it.

## Side effects: cmd + Result

```ts
import { BehaviorSubject, Observable } from "../lib/rx";

export type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

type CreateOrderServiceArgs = { lineItems: LineItem[] };
type CreateOrderSuccess = { orderId: string };
type CreateOrderFailure = { message: string };

type State = {
  lineItems: LineItem[];
  submittedOrderId: string | null;
  submitError: string | null;
};

export class OrderFormController {
  private readonly state$ = new BehaviorSubject<State>({
    lineItems: [],
    submittedOrderId: null,
    submitError: null,
  });

  readonly asObservable = (): Observable<State> => this.state$.asObservable();

  readonly getState = (): State => this.state$.getValue();

  private patchState(partial: Partial<State>): void {
    this.state$.next({ ...this.getState(), ...partial });
  }

  readonly addLineItem = (input: { sku: string }): void => {
    this.patchState({
      lineItems: [
        ...this.getState().lineItems,
        { sku: input.sku, quantity: 1 },
      ],
    });
  };

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

UI (not unit-tested) composes point-free with `pipe`, `andThen`, and `R.tap`. Service / HTTP stay outside `src/core`.

```ts
import { andThen, pipe } from "../../lib/fp";

const submit = pipe(
  controller.handleSubmit,
  andThen(pipe(ordersService.create, toResult)),
  andThen(controller.handleSubmitResult),
);
```

`toResult` maps service success/throw/error-body into `Result`. Keep it at the boundary, not in the controller. Nest `pipe` inside `andThen` when the async step is just service → `toResult`.

## Tests as documentation

File: `src/core/__tests__/OrderLineItemsTableController.test.ts`

No imports except the class under test and types from `src/core`. No Stencil, ramda, RxJS, Jest, Bun, `componentUtil`. Use `getState()`.

```ts
import { OrderLineItemsTableController } from "../OrderLineItemsTableController";

describe("OrderLineItemsTableController", () => {
  it("starts with no line items", () => {
    // Arrange
    const controller = new OrderLineItemsTableController();

    // Act
    const state = controller.getState();

    // Assert
    expect(state.lineItems).toEqual([]);
  });

  it("adds a line item with quantity 1", () => {
    // Arrange
    const controller = new OrderLineItemsTableController();

    // Act
    controller.addLineItem({ sku: "ABC" });

    // Assert
    expect(controller.getState().lineItems).toEqual([
      { sku: "ABC", quantity: 1 },
    ]);
  });
});
```

## Utils (non-DOM)

Still lives in `src/core`. Own test file only if a Stencil component or hook constructs it.

```ts
export class MoneyUtils {
  private readonly amountCents: number;

  constructor(amountCents: number) {
    this.amountCents = amountCents;
  }

  readonly add = (other: MoneyUtils): MoneyUtils => {
    return new MoneyUtils(this.amountCents + other.amountCents);
  };

  readonly toCents = (): number => {
    return this.amountCents;
  };
}
```
