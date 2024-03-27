import { Component, Host, Prop, State, h } from "@stencil/core"
import { ServerInstance, getServerInstances } from "../../server-instance/serverInstanceApi"
import { take } from "rxjs"
import { RouterHistory } from "@stencil-community/router"
import { globalState } from "../../lib/redux/global"

@Component({
  tag: "settings-page",
  styleUrl: "settings-page.scss",
  shadow: false
})
export class SettingsPage {
  @State() serverInstances: ServerInstance[] = []
  @Prop() history: RouterHistory

  componentWillLoad() {
    globalState.update({ isLoading: true })

    const done = () => {
      globalState.update({ isLoading: false })
    }

    getServerInstances()
      .pipe(take(1))
      .subscribe({
        next: s => {
          this.serverInstances = s
        },
        error: done,
        complete: done
      })
  }

  render() {
    return (
      <Host>
        <mobile-view>
          <div class="settings-page">
            <page-header history={this.history} />
            {this.serverInstances.length && (
              <div class="server-instances">
                <dropdown-server serverInstances={this.serverInstances}></dropdown-server>
                <h3>Server Instances</h3>
                <h4 class="head">
                  <span>Name</span>
                  <span>Locations</span>
                  <span class="has-cdn">CDN?</span>
                </h4>
                <ul>
                  {this.serverInstances.map(s => (
                    <li key={s.apiUrl}>
                      <li-server-instance serverInsance={s}></li-server-instance>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </mobile-view>
      </Host>
    )
  }
}
