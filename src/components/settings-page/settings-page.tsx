import { Component, Host, State, h } from "@stencil/core"
import { ServerInstance, getServerInstances } from "../../server-instance/serverInstanceApi"
import { take } from "rxjs"

@Component({
  tag: "settings-page",
  styleUrl: "settings-page.scss",
  shadow: true
})
export class SettingsPage {
  @State() serverInstances: ServerInstance[] = []

  componentWillLoad() {
    getServerInstances()
      .pipe(take(1))
      .subscribe(s => {
        this.serverInstances = s
      })
  }

  render() {
    return (
      <Host>
        <mobile-view>
          {this.serverInstances.length && (
            <div class="server-instances">
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
        </mobile-view>
      </Host>
    )
  }
}
