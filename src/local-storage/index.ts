const LocalStorage = {
  getJson<T>(key: string): T | null {
    const value = localStorage.getItem(key)

    if (value) {
      return JSON.parse(value)
    }

    return null
  },

  setJson<T extends Record<string, unknown>>(key: string, json: T) {
    localStorage.setItem(key, JSON.stringify(json))
  }
}

export { LocalStorage }
