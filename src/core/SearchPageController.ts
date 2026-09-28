import { SearchRouteUtils } from "./SearchRouteUtils"

export class SearchPageController {
  private readonly searchRouteUtils = new SearchRouteUtils()

  readonly handleSubmitSearch = (query: string): string =>
    this.searchRouteUtils.getSearchPath(query)
}
