import { Component, h, Element, State, Prop } from "@stencil/core"
import { AppRoute } from "../../utils/AppRoute"
import { Subject } from "rxjs"
import { IAppError } from "../../lib/redux/global"
import { NotificationModel } from "../../lib/notifier"
import { notifcationState$ } from "../../lib/facades/notifier"
import { componentUtil } from "../../lib/app-state-mgt"
import { globalState$ } from "../../lib/facades/global"

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: false
})
export class AppRoot {
  disconnected$ = new Subject<void>()

  @Element() el: HTMLElement
  @State() private isLoading: boolean
  @State() private error: IAppError

  @Prop({ mutable: true }) notification: NotificationModel

  componentWillLoad() {
    const component = componentUtil(this)

    component.subscribe(globalState$, state => {
      this.error = state.error
      this.isLoading = state.isLoading
    })
    component.subscribe(notifcationState$, s => {
      this.notification = s
    })
  }

  render() {
    return (
      <div>
        <main>
          <stencil-router historyType="hash">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={AppRoute.getPath("/")} component="trending-page" exact />
              <stencil-route url={AppRoute.getPath("/videos/:videoId")} component="video-page" exact />
              <stencil-route url={AppRoute.getPath("/search")} component="search-page" exact />
              <stencil-route url={AppRoute.getPath("/shared-content-receiver")} component="shared-content-receiver" />
              <stencil-route url={AppRoute.getPath("/playlists/:playlistId")} component="a-playlist" />
              <stencil-route url={AppRoute.getPath("/settings")} component="settings-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        {this.isLoading && <loading-page></loading-page>}
        {this.error && <error-page error={this.error}></error-page>}
        {this.notification && <x-notification data={this.notification}></x-notification>}
      </div>
    )
  }
}
