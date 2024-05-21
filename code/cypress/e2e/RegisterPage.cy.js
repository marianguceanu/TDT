describe("Register page", () => {
  beforeEach(() => {
    cy.visit("https://www.angelfire.lycos.com/");
  });
  it("EXPECTED: Should take us to the register page", () => {
    cy.get("header")
      .first()
      .as("header")
      .within(() => {
        cy.get("[title='Sign up for a FREE Angelfire account']")
          .as("Register button")
          .click();
      });
  });

  it("ACTUAL: Page doesn't exist, or it doesn't load, so there should be nothing there", () => {
    cy.get("header")
      .first()
      .as("header")
      .within(() => {
        cy.get("[title='Sign up for a FREE Angelfire account']").as(
          "Register button",
        );
        cy.should("exist");
      });
  });
});
