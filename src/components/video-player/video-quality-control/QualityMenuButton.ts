import videojs from "video.js"
import "./QualityMenuItem"
import { DEFAULT_QUALITY_LABEL } from "../../../utils/constants"
import Player from "video.js/dist/types/player"

var MenuButton = videojs.getComponent("MenuButton")
var Component = videojs.getComponent("Component")
var QualityMenuItem = videojs.getComponent("QualityMenuItem")

// @ts-ignore
export class QualityMenuButton extends MenuButton {
  labelEl: Element

  constructor(player, options) {
    super(player, options)

    // @ts-ignore
    player.qualityLevels().on("change", () => this.updateLabel())
  }

  updateLabel() {
    if (!this.vPlayer) return

    // @ts-ignore
    const qualityLevels = this.vPlayer.qualityLevels()

    if (qualityLevels.selectedIndex_ === -1) {
      this.labelEl.textContent = DEFAULT_QUALITY_LABEL
      return
    }

    const quality = qualityLevels[qualityLevels.selectedIndex_]
    this.labelEl.textContent = quality.height + "p"
  }

  get vPlayer(): Player {
    // @ts-ignore
    return this.player() as Player
  }

  createEl() {
    const el = super.createEl()

    const id = "vjs-video-quality-value-label"

    this.labelEl = videojs.dom.createEl("div", {
      className: "vjs-video-quality-value",
      id,
      textContent: DEFAULT_QUALITY_LABEL
    })

    el.appendChild(this.labelEl)

    return el
  }

  createItems() {
    const items = []

    // @ts-ignore
    const qualties = this.player().qualityLevels()
    for (let i = 0; i <= qualties.length - 1; i++) {
      // @ts-ignore
      items.push(new QualityMenuItem(this.player(), { quality: qualties[i] }))
    }

    // @ts-ignore
    items.push(new QualityMenuItem(this.player(), { quality: undefined }))

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
