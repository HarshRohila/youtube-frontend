import { Component, Host, State, h } from "@stencil/core"
import { DefaultVideoPlayer, VideoPlayerType } from "../../settings/defaultVideoPlayer"

const DROPDOWN_ID = "default-video-player"

const PLAYER_OPTIONS: { value: VideoPlayerType; label: string }[] = [
  { value: "in-built", label: "In-built" },
  { value: "youtube", label: "YouTube" }
]

@Component({
  tag: "dropdown-player",
  styleUrl: "dropdown-player.css",
  shadow: true
})
export class DropdownPlayer {
  @State() selected: VideoPlayerType

  componentWillLoad() {
    this.selected = DefaultVideoPlayer.get()
  }

  private readonly onChange = (ev: Event) => {
    const value = (ev.target as HTMLSelectElement).value as VideoPlayerType

    this.selected = value

    DefaultVideoPlayer.set(this.selected)
  }

  render() {
    return (
      <Host>
        <label htmlFor={DROPDOWN_ID}>Default Video Player:</label>
        <select name="video-player" id={DROPDOWN_ID} onChange={this.onChange}>
          {PLAYER_OPTIONS.map(option => (
            <option value={option.value} selected={this.selected === option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Host>
    )
  }
}
