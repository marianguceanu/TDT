describe("Login form", () => {
  beforeEach(() => {
    cy.visit("https://www.angelfire.lycos.com/");
  });
  it("EXPECTED: Should open the login form. complete the form then invalidate the request because register was unsucessful", () => {
    cy.get("header")
      .first()
      .as("header")
      .within(() => {
        cy.get("[title='Login']").as("Login button").click();
        cy.log("Opening login form");
        cy.get("input[id='username']").should("be.visible").type("testuser");
        cy.get("input[id='passWORD']")
          .should("be.visible")
          .type("testpassword");
        cy.log(
          "Submitting login form will send us to an unavailable page, that cannot be accessed, therefore test will fail",
        );
        cy.get("input[type='submit']").click();
      });
  });

  it("ACTUAL: Page doesn't exist, or it doesn't load, so there is nothing there", () => {
    cy.get("header")
      .first()
      .as("header")
      .within(() => {
        cy.get("[title='Login']")
          .as("Login button")
          .should("be.visible")
          .click();
        cy.log("Opening login form");
        cy.get("input[id='username']").should("be.visible").type("testuser");
        cy.get("input[id='passWORD']")
          .should("be.visible")
          .type("testpassword");
        cy.log(
          "Submitting login form will send us to an unavailable page, that cannot be accessed",
        );
        cy.get("input[type='submit']").should("be.visible");
        cy.should("exist");
      });
  });

  it("Should contain a form, and not a new page, to prove design incosistency", () => {
    cy.get("header")
      .first()
      .as("header")
      .within(() => {
        cy.get("[title='Login']")
          .as("Login button")
          .should("be.visible")
          .click();
        cy.log("Opening login form");
        cy.get("input[id='username']").should("be.visible").type("testuser");
        cy.get("input[id='passWORD']")
          .should("be.visible")
          .type("testpassword");
        cy.get("input[type='submit']").should("be.visible");
        cy.should("exist");
      });
  });
});
