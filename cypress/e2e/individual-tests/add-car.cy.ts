import car from "../../fixtures/car.json"

describe("add car", () => {
  before(() => {
    const apiUrl = Cypress.env("API_URL")
    cy.request({
      method: "DELETE",
      url: `${apiUrl}/${car.id}`,
      failOnStatusCode: false,
    })
    cy.visit("/")
  })

  it("adds a new car to the list", () => {
    cy.findByRole("form").findByLabelText("ID", { exact: false }).type(car.id)
    cy.findByRole("form")
      .findByLabelText("Brand", { exact: false })
      .type(car.brand)
    cy.findByRole("form")
      .findByLabelText("Status", { exact: false })
      .type(car.status)
    cy.findByRole("form")
      .findByLabelText("License plate", { exact: false })
      .type(car.licensePlate)
    cy.findByRole("form").contains("Add new car").click()
    cy.findByRole("form").contains("out-of-service").click()
    cy.findByRole("form").contains("Add new car").click()
    cy.findByRole("form")
      .findByLabelText("Brand", { exact: false })
      .should("have.value", "")
  })

  it("fails when adding the same ID again", () => {
    cy.findByLabelText("ID", { exact: false }).type(car.id)
    cy.findByLabelText("Brand", { exact: false }).type(car.brand)
    cy.findByLabelText("Status", { exact: false }).type(car.status)
    cy.findByLabelText("License plate", { exact: false }).type(car.licensePlate)
    cy.contains("Add new car").click()
    cy.contains("out-of-service").click()
    cy.contains("Add new car").click()
    cy.contains("Response code 400")
  })
})
