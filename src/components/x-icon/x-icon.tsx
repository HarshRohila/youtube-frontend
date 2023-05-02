import { IconDefinition, icon, dom } from "@fortawesome/fontawesome-svg-core"
import { Component, Host, h, Prop } from "@stencil/core"

@Component({
  tag: "x-icon",
  styleUrl: "x-icon.scss",
  shadow: true
})
export class XIcon {
  @Prop() icon: IconDefinition
  @Prop() spin = false
  @Prop() mask?: IconDefinition
  @Prop() size?: string

  get iconClassList() {
    const classes = {
      "fa-spin": this.spin,
      [`fa-${this.size}`]: this.size
    }

    return Object.keys(classes)
      .map(key => (classes[key] ? key : null))
      .filter(key => key)
  }

  render() {
    return (
      <Host>
        <style innerHTML={dom.css()}></style>
        <span innerHTML={icon(this.icon, { classes: this.iconClassList, mask: this.mask }).html[0]}></span>
      </Host>
    )
  }
}
