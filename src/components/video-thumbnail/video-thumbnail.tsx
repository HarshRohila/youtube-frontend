import { Component, Prop, State, h, Event, EventEmitter } from "@stencil/core"

const RETRY_COUNT = 1

@Component({
  tag: "video-thumbnail",
  shadow: false
})
export class VideoThumbnail {
  @Prop() imageSrc: string
  @Event() errored: EventEmitter
  @Event() errorFixed: EventEmitter

  @State() retriesLeft = RETRY_COUNT
  @State() hasError = false

  handleError = () => {
    this.hasError = true

    if (this.retriesLeft > 0) {
      this.retriesLeft--
      this.errored.emit()
    }
  }

  handleLoad = () => {
    const hadError = this.hasError
    if (hadError) {
      this.errorFixed.emit()
    }

    this.hasError = false
  }

  render() {
    return <img class="thumbnail" onError={this.handleError} onLoad={this.handleLoad} src={this.imageSrc}></img>
  }
}
