import { BehaviorSubject } from "rxjs"
import { NotificationModel } from "../../notifier"

const state$ = new BehaviorSubject<NotificationModel | undefined>(undefined)

export function createNotification(notification: NotificationModel) {
  state$.next(notification)
  setTimeout(() => {
    state$.next(undefined)
  }, 2000)
}

export const notifcationState$ = state$
