import { VideoController } from "../VideoController"

describe("VideoController", () => {
  it("returns in-built video route when player mode is in-built", () => {
    // Arrange
    const controller = new VideoController("in-built")
    const video = { videoId: "abc123" }

    // Act
    const path = controller.handleClickVideo(video)

    // Assert
    expect(path).toEqual("/videos/abc123")
  })

  it("returns youtube route when player mode is youtube", () => {
    // Arrange
    const controller = new VideoController("youtube")
    const video = { videoId: "abc123" }

    // Act
    const path = controller.handleClickVideo(video)

    // Assert
    expect(path).toEqual("/youtube/abc123")
  })
})
