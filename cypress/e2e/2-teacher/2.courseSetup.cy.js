describe("Course Publish", () => {
  beforeEach(() => {
    cy.visit("https://learnify-five-navy.vercel.app/sign-in");
  });

  it("Course publish button is disabled if the fields are not filled", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.contains("Edit").click();
    cy.get("button").contains("Publish").should("be.disabled");
  });

  it("Course publish button is enabled if all the fields are filled", () => {
    cy.get('input[type="text"]').type("abc@gmail.com");
    cy.get(".cl-formButtonPrimary").click();
    cy.get('input[type="password"]').type("Prithvi@1241");
    cy.get("button").contains("Continue").click();
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Teacher Mode").click();
    cy.get('button[aria-haspopup="menu"]').click();
    cy.contains("Edit").last().click();
    cy.contains("Edit description").click();
    cy.get('textarea[name="description"]').type(
      "Unlock the power of yoga and embark on a transformative journey toward physical and mental well-being."
    );
    cy.contains("Save").click();
    cy.get("button").contains("Publish").click();
  });
});
