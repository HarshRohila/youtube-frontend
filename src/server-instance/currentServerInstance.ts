import { LocalStorage } from "../local-storage"
import { ServerInstance } from "./serverInstanceApi"

const defaultInstance: ServerInstance = {
  apiUrl: "https://pipedapi.in.projectsegfau.lt",
  hasCdn: false,
  locations: "",
  name: "projectsegfau.lt in"
}

const KEY = "s-instance"

export const CurrentServerInstance = {
  set(serverInstance: ServerInstance) {
    LocalStorage.setJson(KEY, serverInstance)
  },
  get(): ServerInstance {
    const instance = LocalStorage.getJson<ServerInstance>(KEY)

    if (instance) return instance

    return defaultInstance
  }
}
