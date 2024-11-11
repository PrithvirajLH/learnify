describe("Edit course", () => {
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
    cy.get('button[aria-haspopup="menu"]').click();
    cy.contains("Edit").last().click();
  });
});
