import { Component, h } from "@stencil/core"

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
              <stencil-route url="/" component="trending-page" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route url="/videos/:videoId" component="video-page" />
              <stencil-route url="/trending" component="trending-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    )
  }
}
