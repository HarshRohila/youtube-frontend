import { createNotification } from "../facades/notifier"

interface INotifier {
  notify(message: string, buttons: NotificationButton[]): void
}

export interface NotificationButton {
  text: string
  clickHandler: () => void
}

class Notifier implements INotifier {
  notify(message: string, buttons: NotificationButton[]): void {
    createNotification({ text: message, buttons })
  }
}

export function getNotifier(): INotifier {
  return new Notifier()
}

export interface NotificationModel {
  text: string
  buttons: NotificationButton[]
}
