Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Marcelo");
  cy.get("#lastName").type("Farias");
  cy.get("#email").type("marceloalyson@gmail.com");
  cy.get("#open-text-area").type("teste");
  cy.contains("button", "Enviar").click();
});
