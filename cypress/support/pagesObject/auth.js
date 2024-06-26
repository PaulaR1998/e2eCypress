Cypress.Commands.add('auth', () => {
    cy.visit('https://tradeappone.com.br/login');

    cy.get('#usurio-1').type('05709976741');
    cy.get('#senha-1').type('Trade@2024');
    cy.get('.login-field > .mt-2').invoke('removeAttr', 'disabled');

    cy.get('.login-field > .mt-2').click({ force: true });


});