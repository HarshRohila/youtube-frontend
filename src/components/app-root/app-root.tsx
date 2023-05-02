import { Component, h } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Another YouTube Front-end</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={AppRoute.getPath("")} component="trending-page" exact />
              <stencil-route url={AppRoute.getPath("/videos/:videoId")} component="video-page" />
              <stencil-route url={AppRoute.getPath("/trending")} component="trending-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    )
  }
}
