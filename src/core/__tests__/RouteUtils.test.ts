import { RouteUtils } from "../RouteUtils"

describe("RouteUtils", () => {
  it("returns trending home path", () => {
    // Arrange
    const utils = new RouteUtils()

    // Act
    const path = utils.getTrendingPath()

    // Assert
    expect(path).toEqual("/")
  })
})
