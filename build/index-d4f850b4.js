import { A as AppRoute } from './index-fe20d408.js';

class Router {
  constructor(history) {
    this.history = history;
  }
  showVideoPage(video) {
    this.history.push(AppRoute.getPath(`/videos/${video.videoId}`));
  }
}

export { Router as R };
