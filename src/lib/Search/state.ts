import { BehaviorSubject, Subject, takeUntil } from "rxjs"

interface State {
  searchText: string
  showSearchbar: boolean
}

export const state$ = new BehaviorSubject<State>({
  searchText: "",
  showSearchbar: true
})

export const userEvents = {
  searchClick(disconnected$: Subject<void>) {
    const searchClick = new Subject<void>()

    searchClick.pipe(takeUntil(disconnected$)).subscribe(() => {
      setState({ showSearchbar: true })
    })

    return {
      emit() {
        searchClick.next()
      }
    }
  },

  searchClose(disconnected$: Subject<void>) {
    const searchClose = new Subject<void>()

    searchClose.pipe(takeUntil(disconnected$)).subscribe(() => {
      setState({ showSearchbar: false })
    })

    return {
      emit() {
        searchClose.next()
      }
    }
  }
}

function setState(newState: Partial<State>) {
  state$.next({ ...state$.value, ...newState })
}
