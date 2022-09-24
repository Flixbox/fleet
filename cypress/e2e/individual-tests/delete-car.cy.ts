import car from "../../fixtures/car.json"

describe("delete car", () => {
  before(() => {
    cy.visit("/")
  })
  it("deletes a car", () => {
    cy.contains(car.id)
    cy.findByTestId(`delete-${car.id}`).click()
    cy.wait(5000)
    cy.contains(car.id).should("not.exist")
  })
})
