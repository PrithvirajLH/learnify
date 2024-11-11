describe("category function test", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("filterning using category", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Browse").click();
    cy.get('div[class="truncate"]').contains("Computer Science").click();
    cy.contains("React").should("be.visible");
    cy.contains("Advanced Web Development");
  });
});
