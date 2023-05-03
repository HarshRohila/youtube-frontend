import { r as registerInstance, h, e as Host } from './index-3b293f20.js';
import { Y as YouTubeApi } from './index-eda0517b.js';
import { S as Subject, a as takeUntil } from './index-c062af89.js';

const videoPageCss = ".video-page{height:100vh}";

let VideoPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disconnected$ = new Subject();
  }
  componentWillLoad() {
    const videoId = this.match.params.videoId;
    console.log(videoId);
    YouTubeApi.getApi()
      .getStream(videoId)
      .pipe(takeUntil(this.disconnected$))
      .subscribe(stream => {
      this.url = stream.sources[0].url;
    });
  }
  disconnectedCallback() {
    this.disconnected$.next();
    this.disconnected$.complete();
  }
  render() {
    return (h(Host, null, h("div", { class: "video-page" }, this.url && h("video-player", { src: this.url }))));
  }
};
VideoPage.style = videoPageCss;

export { VideoPage as video_page };
