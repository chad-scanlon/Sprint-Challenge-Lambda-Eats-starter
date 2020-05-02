/*global cy */

describe("Tests our home inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("adds texts to inputs", function () {
    cy.get('[data-cy="name"]').type("Chad").should("have.value", "Chad");
    cy.get('[data-cy="email"]')
      .type("chad@chad.com")
      .should("have.value", "chad@chad.com");
  });
});
describe("Tests special instructions text-box", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza-form/");
  });
  it("adds texts to input", function () {
    cy.get('[data-cy="special-instructions"]')
      .type("light cheese please")
      .should("have.value", "light cheese please");
  });
});
describe("checking boxes", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza-form/");
  });
  it("checks topping boxes", function () {
    cy.get('[type="checkbox"]').check().should("be.checked");
  });
});
describe("Tests form-submit", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza-form/");
    cy.get("#size").select("large").should("have.value", "large");
    cy.get("#sauce").select("Original").should("have.value", "Original");
  });
  it("submits form", function () {
    cy.get('[data-cy="submit-order-button"]').click();
  });
});
