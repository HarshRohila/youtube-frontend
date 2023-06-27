import { BehaviorSubject } from "rxjs"

export interface PlaylistFormState {
  showForm: boolean
}
const state$ = new BehaviorSubject<PlaylistFormState>({ showForm: false })

export function showPlaylistForm() {
  state$.next({ showForm: true })
}

export function closePlaylistForm() {
  state$.next({ showForm: false })
}

export const playlistFormState$ = state$
