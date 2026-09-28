import { SearchRouteUtils } from "./SearchRouteUtils"

export class SearchPageController {
  private readonly searchRouteUtils = new SearchRouteUtils()

  readonly handleSubmitSearch = this.searchRouteUtils.getSearchPath
}
