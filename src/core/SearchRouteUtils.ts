import { AppRoute } from "../utils/AppRoute"

export class SearchRouteUtils {
  readonly getSearchPath = (query: string): string =>
    AppRoute.getPath(`/search?q=${query}`)
}
