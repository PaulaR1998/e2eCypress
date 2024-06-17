describe('', () => {
    beforeEach(() => {
        cy.auth();
        cy.log('123');
    });
    it('Login', () => {

    });
    it('Ativacao de operadoras', () => {
        cy.get('#id="card-activation-01"').click();
    })
});
