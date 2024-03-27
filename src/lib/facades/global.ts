import { initDatbase } from "../../playlist/database/Database"
import { globalState } from "../redux/global"
import { combineLatest, map } from "../rx-exports"

const initDb$ = initDatbase()

const globalState$ = combineLatest([initDb$, globalState.asObservable()]).pipe(map(([, state]) => state))

export { globalState$ }
