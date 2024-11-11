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
    cy.contains("Edit description").click();
    cy.get('textarea[name="description"]').type(
      "Unlock the power of yoga and embark on a transformative journey toward physical and mental well-being."
    );
    cy.contains("Save").click();
    cy.pause();
    cy.contains("Edit category").click();
    cy.get('button[role="combobox"]').click();
    cy.get('div[role="group"]').contains("Computer Science").click();
    cy.contains("Save").click();
    cy.contains("Edit price").click();
    cy.get('input[type="number"]').type("29.99");
    cy.contains("Save").click();
  });
});
