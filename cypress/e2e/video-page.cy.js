describe("template spec", () => {
  it("passes", () => {
    cy.visit("/")
  })

  it("Visiting video page with time, starts video from that time", () => {
    cy.visit("/#/videos/8JnfIa84TnU?t=72.983353")
    cy.get("video").should("have.prop", "currentTime", 72.983353)
  })
})
