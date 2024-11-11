describe("Course Before purchase", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("check whether the couse is locked before purchase", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Browse").click();
    cy.get('img[alt="Photography"]').click();
    cy.contains("Enroll for").should("be.visible");
    cy.contains("Module 1").click();
    cy.contains("This chapter is locked.").should("be.visible");
  });
});
