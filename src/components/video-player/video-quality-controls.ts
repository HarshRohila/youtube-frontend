import { Source } from "../../YoutubeApi"
import Player from "video.js/dist/types/player"
import { QualityMenuButton } from "./video-quality-control/QualityMenuButton"

export function setupVideoQualityControl(player: Player, getSources: () => Source[] = () => []) {
  var qtyBtn = new QualityMenuButton(player, {
    className: "vjs-visible-text vjs-quality-selector",
    getSources
  })

  const controlBar = player.getChild("ControlBar")
  // @ts-ignore
  controlBar.addChild(qtyBtn, {}, controlBar.children_.length - 2)

  return qtyBtn
}
