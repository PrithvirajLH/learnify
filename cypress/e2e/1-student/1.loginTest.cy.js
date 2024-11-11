// cypress/e2e/login.spec.js

describe("Learnify Login Page Tests", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("should display all UI elements", () => {
    // Check if the main title and elements are visible
    cy.contains("Sign in to Learnify").should("be.visible");
    cy.contains("Continue with Google").should("be.visible");
    cy.contains("Email address").should("be.visible");
    cy.get('input[type="text"]').should("be.visible");
    cy.get("button").contains("Continue").should("be.visible");
    cy.contains("Sign up").should("be.visible");
  });

  it("should show validation message for invalid email format", () => {
    // Type an invalid email
    cy.get('input[type="text"]').type("abc.123");
    cy.get(".cl-formButtonPrimary").click();

    // Check the validation message directly on the input field
    cy.get('input[type="text"]').then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please match the requested format."
      );
    });
  });

  it("should show error when email field is empty", () => {
    // Click continue without entering an email
    cy.get(".cl-formButtonPrimary").click();

    // Check if error message is shown
    cy.get('input[type="text"]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  it("should login successfully when authenticated user logs in", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();

    //cy.get('input[type="password"]', { timeout: 10000 }).should("be.visible");

    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Browse").should("be.visible");
  });
});
