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
})
