import { AppRoute } from "../../utils/AppRoute"

export class Router {
  constructor(private history: IHistory) {}
  showTrendingPage() {
    this.history.push(AppRoute.getPath(`/`))
  }
}

interface IHistory {
  push(path: string): void
  replace(path: string): void
}
