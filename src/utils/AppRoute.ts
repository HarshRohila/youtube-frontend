import { getEnvConfig } from "./getConfigForEnv"
export { AppRoute }

const AppRoute = {
  getPath(path: string) {
    const { appPath } = getEnvConfig()

    if (!path) path = "/"

    return appPath + path
  }
}
