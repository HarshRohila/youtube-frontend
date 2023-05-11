export { AppRoute }

const AppRoute = {
  getPath(path: string) {
    return path
  },
  getCurrentSpaUrl() {
    return location.href
  }
}
