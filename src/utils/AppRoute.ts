export { AppRoute }

const AppRoute = {
  getPath(path: string) {
    return path
  },
  getCurrentSpaUrl() {
    var pathSegmentsToKeep = 1

    var l = window.location
    let a =
      l.protocol +
      "//" +
      l.hostname +
      (l.port ? ":" + l.port : "") +
      l.pathname
        .split("/")
        .slice(0, 1 + pathSegmentsToKeep)
        .join("/") +
      "/?/" +
      l.pathname.slice(1).split("/").slice(pathSegmentsToKeep).join("/").replace(/&/g, "~and~") +
      (l.search ? "&" + l.search.slice(1).replace(/&/g, "~and~") : "") +
      l.hash

    return a
  }
}
