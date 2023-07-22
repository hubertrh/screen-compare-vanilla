describe("Cookie Consent Banner", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:5173");
  });

  it("Cookie consent banner and buttons should be displayed if no cookiesAccepted cookie is set", () => {
    cy.get(".cookie-consent").should("not.have.class", "invisible");
    cy.get(".cookie-consent-backdrop").should("not.have.class", "invisible");
    cy.get(".cookie-consent__button--accept").should("be.visible");
    cy.get(".cookie-consent__button--reject").should("be.visible");
  });

  it("Accept cookies button should set a cookiesAccepted cookie and hide the banner", () => {
    cy.get(".cookie-consent__button--accept").click();
    cy.getCookie("cookiesAccepted").should("have.property", "value", "true");
    cy.get(".cookie-consent").should("have.class", "invisible");
    cy.get(".cookie-consent-backdrop").should("have.class", "invisible");
  });

  it("Reject cookies button should set a cookiesAccepted cookie to false and hide the banner", () => {
    cy.get(".cookie-consent__button--reject").click();
    cy.getCookie("cookiesAccepted").should("have.property", "value", "false");
    cy.get(".cookie-consent").should("have.class", "invisible");
    cy.get(".cookie-consent-backdrop").should("have.class", "invisible");
  });
});

describe("Screen Comparison Form", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:5173");
    cy.get(".cookie-consent__button--reject").click();
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

  it("Check if changing the dark mode works", () => {
    // Check the initial state of the body class
    cy.get("body")
      .invoke("attr", "class")
      .then((initialClass) => {
        cy.get(".switch-mode").should("be.visible").click();

        if (initialClass === "light-mode") {
          cy.get("body").should("not.have.class", "light-mode");
        } else {
          cy.get("body").should("have.class", "light-mode");
        }
      });
  });
});
