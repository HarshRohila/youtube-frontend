import videojs from "video.js"
import "./QualityMenuItem"
import { Source } from "../../../YoutubeApi"

var MenuButton = videojs.getComponent("MenuButton")
var Component = videojs.getComponent("Component")
var QualityMenuItem = videojs.getComponent("QualityMenuItem")

// @ts-ignore
export class QualityMenuButton extends MenuButton {
  labelEl: Element

  constructor(player, options) {
    super(player, options)

    // @ts-ignore
    this.on(player, "sourceset", _e => {
      this.updateLabel()
    })
  }

  updateLabel() {
    // @ts-ignore
    const selectedSrc = this.sources.find(q => q.url === this.player().currentSrc())
    this.labelEl.textContent = selectedSrc.quality
  }

  get sources() {
    // @ts-ignore
    return this.options().getSources() as Source[]
  }

  createEl() {
    const el = super.createEl()

    const id = "vjs-video-quality-value-label"

    this.labelEl = videojs.dom.createEl("div", {
      className: "vjs-video-quality-value",
      id,
      textContent: "Auto"
    })

    el.appendChild(this.labelEl)

    return el
  }

  createItems() {
    const items = []

    // @ts-ignore
    const sources = this.sources
    for (let i = 0; i <= sources.length - 1; i++) {
      // @ts-ignore
      items.push(new QualityMenuItem(this.player(), { source: sources[i] }))
    }

    return items
  }

  dispose() {
    this.labelEl = null

    super.dispose()
  }
}

// @ts-ignore
QualityMenuButton.prototype.controlText_ = "Video Quality"

// @ts-ignore
Component.registerComponent("QualityMenuButton", QualityMenuButton)
