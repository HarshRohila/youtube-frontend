import { combineReducers, createStore } from "redux"
import { from } from "rxjs"
import { search } from "./search"

const rootReducer = combineReducers({ search })

export const store = createStore(rootReducer)

export const state$ = from(store)
