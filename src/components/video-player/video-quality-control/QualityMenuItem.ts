import videojs from "video.js"
import Player from "video.js/dist/types/player"
import { compactFormatter } from "../../../utils/NumberFormatter"
import { DEFAULT_QUALITY_LABEL } from "../../../utils/constants"

var MenuItem = videojs.getComponent("MenuItem")
var Component = videojs.getComponent("Component")

const getBitRateFromQuality = quality => {
  return compactFormatter().format(quality.bitrate) + "bit/s"
}

const getLabel = options => {
  if (!options.quality) return DEFAULT_QUALITY_LABEL
  return getLabelFromQuality(options.quality)
}

const getLabelFromQuality = quality => {
  return quality.height + "p " + getBitRateFromQuality(quality)
}

const isSelectedQuality = (currentLabel, player) => {
  const qualityLevels = player.qualityLevels()

  if (qualityLevels.selectedIndex_ === -1) {
    if (currentLabel === DEFAULT_QUALITY_LABEL) return true
    return false
  }

  const selectedQuality = qualityLevels[qualityLevels.selectedIndex_]

  return currentLabel === getLabelFromQuality(selectedQuality)
}

// @ts-ignore
class QualityMenuItem extends MenuItem {
  constructor(player: Player, options) {
    options.label = getLabel(options)
    options.selected = isSelectedQuality(options.label, player)
    options.selectable = true
    options.multiSelectable = false

    super(player, options)

    // @ts-ignore
    player.qualityLevels().on("change", e => this.update(e))
  }

  get vPlayer(): Player {
    // @ts-ignore
    return this.player() as Player
  }

  get qualityLevels(): any[] {
    // @ts-ignore
    return [...this.vPlayer.qualityLevels()]
  }

  handleClick() {
    super.handleClick()
    // @ts-ignore

    let newIndex = -1

    // @ts-ignore
    const selectedQuality = this.options().quality
    if (selectedQuality) {
      newIndex = this.qualityLevels.findIndex(q => q.id === selectedQuality.id)
    }

    // @ts-ignore
    let qualityLevels = this.vPlayer.qualityLevels()
    qualityLevels.selectedIndex_ = newIndex
    qualityLevels.trigger({ type: "change", selectedIndex: newIndex })

    if (newIndex === -1) {
      for (var i = 0; i < qualityLevels.length; i++) {
        var quality = qualityLevels[i]
        quality.enabled = true
      }
    } else {
      for (var i = 0; i < qualityLevels.length; i++) {
        var quality = qualityLevels[i]
        // @ts-ignore
        if (quality.id === this.options().quality.id) {
          quality.enabled = true
        } else {
          quality.enabled = false
        }
      }
    }
  }

  update(_event) {
    // @ts-ignore
    this.selected(isSelectedQuality(this.options().label, this.player()))
  }
}

// @ts-ignore
QualityMenuItem.prototype.contentElType = "button"

// @ts-ignore
Component.registerComponent("QualityMenuItem", QualityMenuItem)
