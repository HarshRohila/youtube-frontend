import { AppRoute } from "../utils/AppRoute"

export class TrendingPageController {
  readonly handleOpenSettings = (): string => AppRoute.getPath("/settings")
}
