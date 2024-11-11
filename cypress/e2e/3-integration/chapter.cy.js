describe("Teacher Login", () => {
  beforeEach(() => {
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });
  it("Edit Course", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
    cy.get('button[aria-haspopup="menu"]').first().click();
    cy.contains("Edit").click();
    cy.contains("Add a chapter").click();
    cy.get('input[name="title"]').type("Introduction");
    cy.contains("Create").click();
  });
});
