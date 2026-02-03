import { PipedApi } from "."
import { IYouTubeApi, YoutubeApiConfig } from "./IYouTubeApi"

interface IYoutTubeApiFactory {
  getApi(config?: YoutubeApiConfig): IYouTubeApi
}

class YoutTubeApiFactory implements IYoutTubeApiFactory {
  getApi(config?: YoutubeApiConfig): IYouTubeApi {
    return new PipedApi(config)
  }
}

export { IYoutTubeApiFactory, YoutTubeApiFactory }
