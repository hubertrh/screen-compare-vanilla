describe("ScreenCompare website", () => {
  it("should close the cookie banner", () => {
    cy.visit("/");
    cy.findByText("Yes, please!").click();
    cy.clearCookies();
    cy.visit("/");
    cy.findByText("No, thanks").click();
  });
});
