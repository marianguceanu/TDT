describe("Domain checker", () => {
  beforeEach(() => {
    cy.visit("https://www.angelfire.lycos.com/");
  });
  it("EXPECTED: should input a domain and check if it is available", () => {
    cy.get('div[id="container"]')
      .should("be.visible")
      .within(() => {
        cy.get('aside[class="callOuts"]')
          .should("be.visible")
          .within(() => {
            cy.get('input[type="text"]').type("test");
            cy.get('input[type="submit"]').click();
          });
      });
    cy.origin("https://domains.lycos.com/", () => {
      cy.get("p").contains("domain is available").should("be.visible");
    });
  });

  it("ACTUAL: should input a domain and redirect us to another origin", () => {
    cy.get('div[id="container"]')
      .should("be.visible")
      .within(() => {
        cy.get('aside[class="callOuts"]')
          .should("be.visible")
          .within(() => {
            cy.get('input[type="text"]').type("test");
            cy.get('input[type="submit"]').click();
          });
      });
  });
});
