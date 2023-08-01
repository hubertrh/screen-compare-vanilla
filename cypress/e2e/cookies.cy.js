describe("Cookie Consent Banner", () => {
  beforeEach(() => {
    cy.visit("/");
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
