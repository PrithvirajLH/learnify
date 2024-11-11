describe("Teacher Login", () => {
  beforeEach(() => {
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("Teacher login, teacher mode button is enabled", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
  });
  it("create new course", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
    cy.contains("New Course").click();
    cy.contains("Course title").should("be.visible");
  });
  it("Check if the continue button is disabled if the title is not given", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
    cy.contains("New Course").click();
    cy.contains("Course title").should("be.visible");
    cy.get("button").contains("Continue").should("be.disabled");
  });

  it("Check if the continue button is enabled if the title is given", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
    cy.contains("New Course").click();
    cy.contains("Course title").should("be.visible");
    cy.get("input").type("Test1");
    cy.contains("Continue").click();
  });
});
