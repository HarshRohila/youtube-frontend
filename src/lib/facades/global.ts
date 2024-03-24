import { initDatbase } from "../../playlist/database/Database"
import { state$ } from "../redux"
import { globalState } from "../redux/global"
import { combineLatest, map } from "../rx-exports"

const initDb$ = initDatbase()

const globalState$ = combineLatest([initDb$, globalState.asObservable()]).pipe(map(([, state]) => state))

const searchState$ = state$.pipe(map(state => state.search))

export { globalState$, searchState$ }
