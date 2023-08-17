const LocalStorage = {
  getJson<T>(key: string): T | null {
    const value = localStorage.getItem(key)

    if (value) return tryParseJson(value)
    return null
  },

  setJson<T extends Record<string, unknown>>(key: string, json: T) {
    localStorage.setItem(key, JSON.stringify(json))
  }
}

function tryParseJson(value: string) {
  try {
    return JSON.parse(value)
  } catch (err) {
    console.error(`Failed to parse`, value)
    return null
  }
}

export { LocalStorage }
