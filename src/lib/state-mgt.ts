import { untilDestroyed } from "@ngneat/until-destroy"
import { BehaviorSubject, Observable, Subject } from "rxjs"

function initComponentUtil({ componentDestroyHandlerName }: { componentDestroyHandlerName: string }) {
  return function initInComponent(componentContext: any) {
    const pub = {
      untilDestroyed<T>(anyObservable: Observable<T>) {
        return anyObservable.pipe(untilDestroyed(componentContext, componentDestroyHandlerName))
      },
      justSubscribe(...observables: Observable<unknown>[]) {
        observables.forEach(obs => {
          pub.untilDestroyed(obs).subscribe()
        })
      }
    }

    return pub
  }
}

function createEvent<U, T = U>(mapper?: (sourceEvent: U) => T, { once }: { once: boolean } = { once: false }) {
  const event = new Subject<T>()

  function handler(ev: U) {
    let newValue: T
    if (mapper) {
      newValue = mapper(ev)
    } else {
      newValue = ev as unknown as T
    }
    event.next(newValue)
    if (once) event.complete()
  }

  return {
    $: event.asObservable(),
    handler
  }
}

function createVoidEvent<T>({ once }: { once: boolean } = { once: false }) {
  return createEvent<T, void>(() => undefined, { once })
}

function createState<T>(initialState: T) {
  type GetPartialState = (currentState: T) => Partial<T>

  const state$ = new BehaviorSubject<T>(initialState)

  return {
    update(newState: Partial<T> | GetPartialState) {
      let getNewState: GetPartialState

      if (typeof newState !== "function") {
        getNewState = () => newState
      } else {
        getNewState = newState
      }

      state$.next({ ...state$.value, ...getNewState(state$.value) })
    },
    get() {
      return state$.value
    },
    asObservable() {
      return state$.asObservable()
    }
  }
}

export { initComponentUtil, createEvent, createVoidEvent, createState }
