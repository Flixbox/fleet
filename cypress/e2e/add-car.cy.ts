import car from "../fixtures/car.json"

describe("add car", () => {
  before(() => {
    cy.visit("/")
  })
  it("adds a new car to the list", () => {
    cy.findByLabelText("Brand", { exact: false }).type(car.brand)
    cy.findByLabelText("Status", { exact: false }).type(car.status)
    cy.findByLabelText("License plate", { exact: false }).type(car.licensePlate)
    cy.contains("Add new car").click()
    cy.contains("out-of-service").click()
    cy.contains("Add new car").click()
    cy.findByLabelText("Brand", { exact: false }).should("have.value", "")
  })
})
