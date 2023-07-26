describe("Theme Changing", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/");
    cy.wait(1000);
    cy.get(".cookie-consent__button--reject").click();
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
