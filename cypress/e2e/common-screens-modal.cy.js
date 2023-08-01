describe("Common Screens Modal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".cookie-consent__button--reject", { timeout: 15000 }).click();
  });

  it("Checks every 'li' in the modal", () => {
    cy.intercept("/data/deviceData.json").as("deviceData");
    cy.get(".btn-add").should("be.visible").click();

    cy.get(".common-screens-btn").each((button, btnIndex) => {
      cy.get(".common-screens-dialog__column li").each((li, liIndex) => {
        cy.get(".common-screens-dialog__wrapper").should("not.be.visible");
        cy.wrap(button).should("be.visible").click();
        cy.get(".common-screens-dialog__wrapper").should("be.visible");

        if (btnIndex === 0 && liIndex === 0) {
          cy.wait("@deviceData");
        }
        cy.wrap(li).click();
        cy.get(".common-screens-dialog__wrapper").should("not.be.visible");

        cy.get(`#size-${btnIndex + 1}`)
          .invoke("val")
          .should("match", /^[0-9]\d*(\.\d+)?$/);

        cy.get(`#ratio-w-${btnIndex + 1}`)
          .invoke("val")
          .should("match", /^[0-9]\d*(\.\d+)?$/);

        cy.get(`#ratio-h-${btnIndex + 1}`)
          .invoke("val")
          .should("match", /^[0-9]\d*(\.\d+)?$/);

        if (liIndex > 4) {
          cy.get(`#name-${btnIndex + 1}`)
            .invoke("val")
            .should("not.be.empty");

          cy.get(`#res-w-${btnIndex + 1}`)
            .invoke("val")
            .should("match", /^[0-9]\d*(\.\d+)?$/);

          cy.get(`#res-h-${btnIndex + 1}`)
            .invoke("val")
            .should("match", /^[0-9]\d*(\.\d+)?$/);
        }
      });
    });
  });
});
