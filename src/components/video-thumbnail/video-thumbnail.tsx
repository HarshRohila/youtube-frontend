import { Component, Prop, State, h, Event, EventEmitter } from "@stencil/core"

const RETRY_COUNT = 1

@Component({
  tag: "video-thumbnail",
  shadow: false
})
export class VideoThumbnail {
  @Prop() imageSrc: string
  @Event() errored: EventEmitter

  @State() retriesLeft = RETRY_COUNT

  handleError = () => {
    if (this.retriesLeft > 0) {
      this.retriesLeft--
      this.errored.emit()
    }
  }

  render() {
    return <img class="thumbnail" onError={this.handleError} src={this.imageSrc}></img>
  }
}
