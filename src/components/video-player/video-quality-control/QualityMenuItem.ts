import videojs from "video.js"
import { Source } from "../../../YoutubeApi"
import Player from "video.js/dist/types/player"

var MenuItem = videojs.getComponent("MenuItem")
var Component = videojs.getComponent("Component")
// @ts-ignore
class QualityMenuItem extends MenuItem {
  source!: Source
  constructor(player: Player, options) {
    options.label = options.source.quality
    options.selected = player.currentSrc() === options.source.url
    options.selectable = true
    options.multiSelectable = false

    super(player, options)

    this.source = options.source

    // @ts-ignore
    this.on(player, "sourceset", e => this.update(e))
  }

  get vPlayer(): Player {
    // @ts-ignore
    return this.player() as Player
  }

  handleClick() {
    super.handleClick()
    const currentTime = this.vPlayer.currentTime()
    this.vPlayer.src({ src: this.source.url, type: this.source.mime })
    this.vPlayer.currentTime(currentTime)
  }

  update(_event) {
    // @ts-ignore
    this.selected(this.player().currentSrc() === this.source.url)
  }
}

// @ts-ignore
QualityMenuItem.prototype.contentElType = "button"

// @ts-ignore
Component.registerComponent("QualityMenuItem", QualityMenuItem)
