import { initDatbase } from "../../playlist/database/Database"
import { state$ } from "../redux"
import { combineLatest, map } from "../rx-exports"

const initDb$ = initDatbase()

const globalState$ = combineLatest([initDb$, state$]).pipe(map(([, state]) => state.global))

export { globalState$ }