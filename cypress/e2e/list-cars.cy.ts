import car from "../fixtures/car.json"

describe("list of cars", () => {
  before(() => {
    cy.visit("/")
  })
  it("shows a car", () => {
    cy.contains(car.brand)
    cy.contains(car.createdAt)
    cy.contains(car.id)
    cy.contains(car.lastUpdatedAt)
    cy.contains(car.licensePlate)
    cy.contains(car.status)
  })
})
