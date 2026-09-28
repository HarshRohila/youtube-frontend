import { SearchPageController } from "../SearchPageController"

describe("SearchPageController", () => {
  it("returns search route when submitting search", () => {
    // Arrange
    const controller = new SearchPageController()

    // Act
    const path = controller.handleSubmitSearch("cats")

    // Assert
    expect(path).toEqual("/search?q=cats")
  })
})
