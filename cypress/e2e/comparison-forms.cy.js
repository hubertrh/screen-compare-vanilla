describe("Screen Comparison Form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".cookie-consent__button--reject", { timeout: 15000 }).click();
  });

  it("First two screens input fields should be rendered and editable", () => {
    const inputs = [
      "size-1",
      "ratio-w-1",
      "ratio-h-1",
      "res-w-1",
      "res-h-1",
      "size-2",
      "ratio-w-2",
      "ratio-h-2",
      "res-w-2",
      "res-h-2",
    ];

    inputs.forEach((id) => {
      cy.get(`#${id}`).should("be.visible").clear().type("1").should("have.value", "1");
    });
  });

  it('"Add third screen" button should be rendered, clickable, and reveal third screen input fields', () => {
    cy.get(".btn-add").should("be.visible").click();
    const inputs = ["size-3", "ratio-w-3", "ratio-h-3", "res-w-3", "res-h-3"];

    inputs.forEach((id) => {
      cy.get(`#${id}`).should("be.visible").clear().type("1").should("have.value", "1");
    });
  });

  it("Compare button should be rendered and submit form if all required fields are filled", () => {
    cy.get(".btn-main--compare").should("be.visible").click();
    // Check if the results section is visible
    cy.get("#screen-results").should("be.visible");
  });

  it("Reset button should be rendered, clickable, and clear all input fields", () => {
    const inputs = [
      "size-1",
      "ratio-w-1",
      "ratio-h-1",
      "res-w-1",
      "res-h-1",
      "size-2",
      "ratio-w-2",
      "ratio-h-2",
      "res-w-2",
      "res-h-2",
      "size-3",
      "ratio-w-3",
      "ratio-h-3",
      "res-w-3",
      "res-h-3",
    ];
    cy.get(".btn-add").should("be.visible").click();

    inputs.forEach((id) => {
      cy.get(`#${id}`).clear().type("1");
    });

    cy.get(".btn-reset").should("be.visible").click();

    inputs.forEach((id) => {
      cy.get(`#${id}`).should("have.value", "");
    });
  });
});
