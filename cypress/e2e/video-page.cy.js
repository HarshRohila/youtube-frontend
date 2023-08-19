describe("template spec", () => {
  it("passes", () => {
    cy.visit("/")
  })

  describe("Play Video from time in Link", () => {
    it("works if video NOT having SKIPABLE part in start", () => {
      cy.visit("/#/videos/8JnfIa84TnU?t=72.983353")
      cy.get("video").should("have.prop", "currentTime", 72.983353)
    })

    it("works if video having SKIPABLE part in start", () => {
      cy.visit("/#/videos/XatXy6ZhKZw?t=102.466939")
      cy.get("video").should("have.prop", "currentTime", 102.466939)
    })
  })
})
