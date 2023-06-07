const eventName = "myDblClick"

export function createDblClickEvent(element: HTMLElement) {
  let doubleClickTimeout

  element.addEventListener("click", handleClick)

  function handleClick(ev) {
    if (doubleClickTimeout) {
      clearTimeout(doubleClickTimeout)
      setNewTimeout()
      const dblClick = new CustomEvent<{ clickEvent: Event }>(eventName, { detail: { clickEvent: ev } })
      element.dispatchEvent(dblClick)
    } else {
      setNewTimeout()
    }
  }

  function setNewTimeout() {
    doubleClickTimeout = setTimeout(() => {
      doubleClickTimeout = null
    }, 300)
  }

  return {
    remove() {
      element.removeEventListener("click", handleClick)
    },
    name: eventName
  }
}
