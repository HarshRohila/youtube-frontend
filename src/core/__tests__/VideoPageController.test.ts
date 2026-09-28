import { VideoPageController } from "../VideoPageController"

describe("VideoPageController", () => {
  it("returns youtube route when watching with YouTube", () => {
    // Arrange
    const controller = new VideoPageController()

    // Act
    const path = controller.handleWatchWithYoutube("abc123")

    // Assert
    expect(path).toEqual("/youtube/abc123")
  })

  it("returns default playlist route when opening playlist", () => {
    // Arrange
    const controller = new VideoPageController()

    // Act
    const path = controller.handleOpenPlaylist()

    // Assert
    expect(path).toEqual("/playlists/1")
  })
})
