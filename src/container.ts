import { SingletonContainer } from "singleton-injection"
import { IYouTubeApi, PipedApi } from "./YoutubeApi"
import { IYoutTubeApiFactory, YoutTubeApiFactory } from "./YoutubeApi/IYoutTubeApiFactory"

const singletonMap = {
  youtubeApiFactory: (): IYoutTubeApiFactory => new YoutTubeApiFactory(),
  youtubeApi: (): IYouTubeApi => new PipedApi()
}

export const container = new SingletonContainer(singletonMap)
