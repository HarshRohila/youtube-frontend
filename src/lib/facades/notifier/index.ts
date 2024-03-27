import { NotificationModel } from "../../notifier"
import { map } from "../../rx"
import { createState } from "../../state-mgt"

const state = createState<{ notification?: NotificationModel }>({ notification: undefined })

export function createNotification(notification: NotificationModel) {
  state.update({ notification })
  setTimeout(() => {
    state.update({ notification: undefined })
  }, 2000)
}

export const notifcationState$ = state.asObservable().pipe(map(state => state.notification))
