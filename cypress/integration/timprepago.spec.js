describe('', () => {
    beforeEach(() => {
        cy.auth();
        cy.log('123');
    });
    it('Login', () => {

    });
    it.only('Ativacao de operadoras', () => {
        cy.get('#card-activation-01').click();
        //botão tim 
        cy.get('[href="/dashboard/activation/tim"]').click();
        // botão pre pago
        cy.contains('TIM Pré Top').click();
        cy.wait(5000);
        //Valdar campos da tela obrigatórios
        //label de pdv e vendedor feito em back não editavél
        cy.contains('Olá, eu sou o João e vou te ajudar a realizar mais uma venda. Bora para a etapa de indicação?')
            .should('be.visible');
        cy.contains(('PDV')).should('be.visible');
        cy.contains(('Vendedor')).should('be.visible');
        cy.contains(' Existe indicação de venda?').should('be.visible');
        cy.get('.is-active > .h-full').click();
        cy.get('.text-02 > .h-full').click();
        //validar botão voltar tela informação de vendas
        //cy.get('.step-buttons > :nth-child(1)').click();
        //validar campo cpf indicação de venda
        cy.get('#cpf-1').type('46918303830');
        cy.get('#nome-1').type('Teste Teste Teste')
        cy.get('.step-buttons > :nth-child(2)').click();
        //validar textos
        cy.contains('Este passo é muito importante, o cliente deve concordar com os termos de cessão de dados! Mostre o documento, caso ele esteja de acordo, clique em “concordo com os termos de cessão de dados como cliente”.')
            .should('be.visible');
        cy.contains('Informações de venda')
            .should('be.visible');
        cy.contains('Preencha as informações de PDV, vendedor e indicação.')
            .should('be.visible');
        cy.contains('Política de cessão de dados')
            .should('be.visible');
        cy.contains('Termo de cessão de dados')
            .should('be.visible');
        cy.contains('Concordo com os termos de cessão de dados como cliente')
            .should('be.visible');
        cy.contains('Visualize os termos de uso em uma nova página.')
            .should('be.visible');
        //validar aceite, e abertura de termo
        cy.get('.text-right > .brand-primary-text').click();
        cy.get('.tao-checkbox__input').click();
        cy.get('.step-buttons > :nth-child(2)').click();
        //validar tela dados pessoais
        cy.contains('Para encontrar as melhores as ofertas disponíveis para o cliente, precisamos que preencha os dados solicitados abaixo com atenção para evitar divergência.')
            .should('be.visible');
        cy.contains('Dados Pessoais')
            .should('be.visible');
        cy.contains('Insira as informações do cliente abaixo:')
            .should('be.visible');
        //cpf
        cy.get('#cpf-1').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#cpf-1').type('00000000000');
        cy.contains('CPF inválido')
            .should('be.visible');
        cy.get('#cpf-1').clear();
        cy.wait(5000);
        cy.get('#cpf-1').type('46844631090');
        //Nome Completo
        cy.contains('*Nome Completo')
            .should('be.visible');
        cy.get('#nomecompleto-1').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#nomecompleto-1').type('aaa');
        cy.contains('Digite o nome inteiro')
            .should('be.visible');
        cy.get('#nomecompleto-1').clear();
        cy.wait(5000);
        cy.get('#cpf-1').type('Paula Teste Teste');
        //Data de Nascimento
        cy.contains('*Data de nascimento')
            .should('be.visible');
        cy.get('id="datadenascimento-1"').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('id="datadenascimento-1"').type('00000000');
        cy.contains('Deve ser menor de 100 anos')
            .should('be.visible');
        cy.get('id="datadenascimento-1"').clear();
        cy.wait(2000);
        cy.get('id="datadenascimento-1"').type('01013000');
        cy.contains('Deve ser maior de 18 anos')
            .should('be.visible');
        cy.get('id="datadenascimento-1"').clear();
        cy.wait(2000);
        cy.get('id="datadenascimento-1"').type('14111998');
        //Nome da mãe

    })



});

