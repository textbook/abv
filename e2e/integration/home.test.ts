it("calculates calories for the specified beer", () => {
  cy.visit("/");
  cy.findByRole("spinbutton", { name: "ABV (%)" }).type("8.0");
  cy.findByRole("spinbutton", { name: "Volume (ml)" }).type("440");
  cy.findByRole("textbox", { name: "Calories" }).should("have.value", "298");
});
