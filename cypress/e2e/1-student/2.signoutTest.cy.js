describe("Learnify SignOut Test", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("should sign out and it should be redirected to login page", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();

    //cy.get('input[type="password"]', { timeout: 10000 }).should("be.visible");

    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Browse").should("be.visible");
    cy.get(".cl-avatarImage").click();
    cy.get("button").contains("Sign out").click();
    cy.contains("Sign in to Learnify").should("be.visible");
  });
});
