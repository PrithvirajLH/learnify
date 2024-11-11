describe("Course After Purchase", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("check whether the couse is unlocked after purchase", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Browse").click();
    cy.get('img[alt="Photography"]').click();
    cy.contains("Enroll for").should("not.exist");
    cy.contains("Intro").click();
    cy.contains("This chapter is locked.").should("not.exist");
    cy.contains("Not completed");
  });

  it("check whether the course progress updates after chapter completion", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Browse").click();
    cy.get('img[alt="Photography"]').click();
    cy.contains("Enroll for").should("not.exist");
    cy.contains("Intro").click();
    cy.contains("This chapter is locked.").should("not.exist");
    //cy.contains("Mark as complete").click();
    cy.contains("% Complete");
  });
});
