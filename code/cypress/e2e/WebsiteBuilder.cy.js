describe("WebsiteBuilder", () => {
  beforeEach(() => {
    cy.visit("https://www.angelfire.lycos.com/");
  });

  it('EXPECTED: Click the "Website Builder" button and open presentation page', () => {
    cy.get('section[class="content hp"]').within(() => {
      cy.get('a[title="Learn about our Website Builder"]')
        .as("builderButton")
        .should("be.visible")
        .click();
    });
    cy.get('div[id="webBuilderIllustration"]').should("be.visible");
    cy.get('section[class="content"]').within(() => {
      cy.get("h2")
        .contains("professional")
        .first()
        .as("description")
        .should("be.visible");
      cy.get("h3[class='signupAction']")
        .contains("Build a website now!")
        .should("be.visible")
        .click();
      cy.get("p").contains("Builder").should("be.visible");
    });
  });

  it('ACTUAL: Click the "Website Builder" button and open presentation page, and then try to create website but be presented with register, which is now accessible, resulting in design flaw', () => {
    cy.get('section[class="content hp"]').within(() => {
      cy.get('a[title="Learn about our Website Builder"]')
        .as("builderButton")
        .should("be.visible")
        .click();
    });
    cy.get('div[id="webBuilderIllustration"]').should("be.visible");
    cy.get('section[class="content"]').within(() => {
      cy.get("h2")
        .contains("professional")
        .first()
        .as("description")
        .should("be.visible");
      try {
        cy.get("h3[class='signupAction']")
          .contains("Build a website now!")
          .should("be.visible")
          .click();
      } catch (e) {
        console.log(e);
        cy.should("not.exist");
      }
    });
  });
});
