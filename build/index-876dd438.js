import { A as AppRoute } from './AppRoute-3105d84a.js';

class Router {
  constructor(history) {
    this.history = history;
  }
  showVideoPage(video) {
    this.history.push(AppRoute.getPath(`/videos/${video.videoId}`));
  }
}

export { Router as R };
