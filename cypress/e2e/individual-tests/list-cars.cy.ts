import car from "../../fixtures/car.json"

describe("list of cars", () => {
  before(() => {
    cy.visit("/")
  })
  it("shows a car", () => {
    cy.contains(car.brand)
    cy.contains(new Date(car.createdAt).toLocaleString())
    cy.contains(car.id)
    cy.contains(new Date(car.lastUpdatedAt).toLocaleString())
    cy.contains(car.licensePlate)
    cy.contains(car.status)
    cy.contains(car.manufacturer)
  })
})
