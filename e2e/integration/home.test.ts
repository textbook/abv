it("calculates calories for the specified beer", () => {
	cy.visit("/");
	cy.findByRole("textbox", { name: "ABV (%)" }).type("8.0");
	cy.findByRole("textbox", { name: "Volume (ml)" }).type("440");
	cy.findByRole("textbox", { name: "Calories" }).should("have.value", "298");
});

it("has shortcuts for common volumes", () => {
	cy.visit("/");
	cy.findByRole("button", { name: "568ml" }).should("exist");
	cy.findByRole("button", { name: "440ml" }).should("exist");

	cy.findByRole("textbox", { name: "ABV (%)" }).type("5.9");
	cy.findByRole("button", { name: "330ml" }).click();
	cy.findByRole("textbox", { name: "Calories" }).should("have.value", "165");
});
