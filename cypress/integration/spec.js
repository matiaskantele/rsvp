describe("rsvp", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("front page has the correct <h1>", () => {
    cy.contains("h1", "Summer 2020");
  });

  it("routes work", () => {
    cy.visit("/thank-you");
    cy.contains("h1", "Thank you!");
  });
});
