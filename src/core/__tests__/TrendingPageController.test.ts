import { TrendingPageController } from "../TrendingPageController"

describe("TrendingPageController", () => {
  it("returns settings route when opening settings", () => {
    // Arrange
    const controller = new TrendingPageController()

    // Act
    const path = controller.handleOpenSettings()

    // Assert
    expect(path).toEqual("/settings")
  })

  it("returns default playlist route when opening playlist", () => {
    // Arrange
    const controller = new TrendingPageController()

    // Act
    const path = controller.handleOpenPlaylist()

    // Assert
    expect(path).toEqual("/playlists/1")
  })
})
