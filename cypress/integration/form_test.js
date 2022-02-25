describe("user-onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const textInput = () => cy.get("input[type=text]");
  const emailInput = () => cy.get("input[type=text]");
  const passwordInput = () => cy.get("input[type=password]");
  const termsInput = () => cy.get("input[type=radio]");

  it("sanity checks", () => {
    expect(2).to.equal(2);
  });

  it("checks the inputs", () => {
    textInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsInput().should("exist");
  });
});
