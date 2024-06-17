Cypress.Commands.add('auth', () => {
    cy.visit('https://tradeappone.com.br/login');

    cy.get('#usurio-1').type('46918303830');
    cy.get('#senha-1').type('Amoalex100%');
    cy.get('.login-field > .mt-2').invoke('removeAttr', 'disabled');

    cy.get('.login-field > .mt-2').click({ force: true });
});