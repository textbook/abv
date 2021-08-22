it("shows the CRA homepage", () => {
  cy.visit("/");
  cy
    .findAllByRole("link", { name: "Learn React" })
    .should("have.attr", "href", "https://reactjs.org");
});
