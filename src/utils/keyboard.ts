import hotkeys from "hotkeys-js"

export interface IKeyboard {
  bind(key: string, handler: (ev: Event) => void): void
  unbind(key: string, handler: (ev: Event) => void): void
}

class Hotkeys implements IKeyboard {
  bind(key: string, handler: (ev: Event) => void): void {
    hotkeys(key, handler)
  }
  unbind(key: string, handler: (ev: Event) => void): void {
    hotkeys.unbind(key, handler)
  }
}

export function getKeyboard() {
  return new Hotkeys() as IKeyboard
}
