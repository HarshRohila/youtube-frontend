import { Observable, Subject, takeUntil } from "rxjs"

export function untilDestroyed<T>(instance: T, destroyMethodName: string) {
  return function rxOperator<U>(source: Observable<U>) {
    const symbol = getSymbol(destroyMethodName)

    const destroy$ = createSubjectOnInstance(instance, symbol)

    overrideDestroyMethod(instance, destroyMethodName, symbol)

    return source.pipe(takeUntil<U>(destroy$))
  }
}

function overrideDestroyMethod<T>(instance: T, destroyMethodName: string, symbol: symbol) {
  const originalDestroy = instance[destroyMethodName]

  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy && originalDestroy.apply(this, arguments)
    completeSubjectOnTheInstance(this, symbol)
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy
  }
}

function getSymbol(destroyMethodName: string) {
  return Symbol(`__destroy__${destroyMethodName}`)
}

function createSubjectOnInstance<T>(instance: T, symbol: symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new Subject<void>()
  }

  return instance[symbol]
}

function completeSubjectOnTheInstance(instance: any, symbol: symbol): void {
  if (instance[symbol]) {
    instance[symbol].next()
    instance[symbol].complete()
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null
  }
}
