import { BehaviorSubject } from "rxjs"
import { NotificationModel } from "../../notifier"

const state$ = new BehaviorSubject<NotificationModel | undefined>(undefined)

let timer

export function createNotification(notification: NotificationModel) {
  state$.next(notification)
  timer = setTimeout(() => {
    clearNotification()
  }, 2000)
}

export function clearNotification() {
  clearTimeout(timer)
  state$.next(undefined)
}

export const notifcationState$ = state$
