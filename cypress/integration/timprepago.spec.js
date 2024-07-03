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
        cy.contains('Existe indicação de venda?').should('be.visible');
        cy.get('.is-active > .h-full').click();
        cy.get('.text-02 > .h-full').click();
        //validar botão voltar tela informação de vendas
        //cy.get('.step-buttons > :nth-child(1)').click();
        //validar campo cpf indicação de venda
        cy.get('#cpf-1').type('46918303830');
        cy.get('#nome-1').type('Teste Teste Teste')
        cy.get('.step-buttons > :nth-child(2)').click();
        //validar textos
        cy.wait(3000);
        cy.contains('Este passo é muito importante, o cliente deve concordar com os termos de cessão de dados! Mostre o documento, caso ele esteja de acordo, clique em “concordo com os termos de cessão de dados como cliente”.')
            .should('be.visible');
        cy.wait(2000);
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
        cy.wait(2000);
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
        cy.get('#nomecompleto-1').click().clear();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.wait(2000);
        cy.get('#nomecompleto-1').type('aaa');
        cy.contains('Digite o nome inteiro')
            .should('be.visible');
        cy.get('#nomecompleto-1').clear();
        cy.wait(5000);
        cy.get('#nomecompleto-1').click().type('Paula Teste Teste');
        cy.wait(2000);
        //Data de Nascimento
        cy.contains('Data de nascimento')
            .should('be.visible');
        cy.get('#datadenascimento-1').click().clear();
        cy.get('#nomedame-1').click();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#datadenascimento-1').type('00000000');
        cy.contains('Deve ser menor de 100 anos')
            .should('be.visible');
        cy.get('#datadenascimento-1').clear();
        cy.wait(2000);
        cy.get('#datadenascimento-1').type('01013000');
        cy.contains('Deve ser maior de 18 anos')
            .should('be.visible');
        cy.get('#datadenascimento-1').clear();
        cy.wait(1000);
        cy.get('#datadenascimento-1').type('14111998');
        //Nome da mãe
        cy.contains('*Nome da Mãe')
            .should('be.visible');
        cy.get('#nomedame-1').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#nomedame-1').type('teste');
        cy.wait(1000);
        cy.contains('Digite o nome inteiro')
            .should('be.visible');
        cy.get('#nomedame-1').clear();
        cy.get('#nomedame-1').type('Teste Teste');
        //verifica mensagem de e-mail
        cy.contains('*E-mail')
            .should('be.visible');
        cy.get('#email-1').click().clear();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#email-1').type('samircd9').blur();
        cy.contains('E-mail inválido')
            .should('be.visible');
        cy.get('#email-1').type('teste22@yopmail.com');
        //verficar telefone celular
        cy.contains('*Telefone Celular')
            .should('be.visible');
        cy.get('#telefonecelular-1').click().clear();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#telefonecelular-1').type('99999999');
        cy.contains('Mínimo de 10 caracteres')
            .should('be.visible');
        cy.get('#telefonecelular-1').type('11999999999');

        //Validar cep e endereço
        cy.contains('*CEP')
            .should('be.visible');
        cy.get('#cep-1').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#cep-1').type('06515060')
        cy.contains('*CEP')
            .should('be.visible');
        cy.contains('Cidade')
            .should('be.visible');
        cy.contains('UF')
            .should('be.visible');
        cy.contains('*Logradouro')
            .should('be.visible');
        cy.contains('*Bairro')
            .should('be.visible');
        cy.contains('*Número')
            .should('be.visible');
        cy.get('#nmero-1').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#nmero-1').click().type('123');
        cy.contains('Complemento')
            .should('be.visible');
        cy.get('#complemento-1').click().blur();
        cy.get('#complemento-1').click().type('casa1');
        cy.get('.step-buttons > :nth-child(2)').click();
        cy.get('.modal-body').contains('Processando solicitação Aguarde enquanto buscamos os melhores descontos disponíveis para o perfil do cliente.')
            .should('be.visible');
        cy.wait(9000);
        // tela modalidade de vendas
        cy.contains('Modalidade de vendas')
            .should('be.visible');
        cy.contains('Configure a modalidade de preferência do cliente')
            .should('be.visible');
        cy.contains('Agora que temos as informações do cliente, precisamos saber a modalidade do serviço para apresentar as melhores ofertas e promoções disponíveis no momento.')
            .should('be.visible');
        cy.contains('Escolha a modalidade de venda para o plano Pré')
            .should('be.visible');
        cy.wait(1000);
        cy.contains('Portabilidade')
            .should('be.visible').click();
        cy.wait(1000);
        cy.contains('Deseja gerar um número temporário?')
            .should('be.visible');
        cy.contains('DDD')
            .should('be.visible');
        cy.contains('Número Portado')
            .should('be.visible');
        cy.contains('ICCID')
            .should('be.visible');
        cy.get('#promoter-participation > .w-full > .text-02 > .h-full').click();
        cy.contains('Informação importante')
            .should('be.visible');
        cy.contains('Ao escolher que o cliente NÃO deseja um número temporário, não será possível aplicar o desconto e a fidelização do aparelho. O plano só será ativado após a conclusão da janela de portabilidade.')
            .should('be.visible');
        cy.get('.w-full > .text-01').click();
        cy.get('#promoter-participation > .w-full > .text-02 > .h-full').click();
        cy.get('.close > .tao-icon').click();
        cy.get('#promoter-participation > .w-full > .text-02 > .h-full').click();
        cy.get('.tao__form-group-dropdown > .tao__form-input > .icon__form > .tao__icon').click();
        cy.get('.form__list > :nth-child(1) > .block').contains('11').click();
        cy.get('#nmeroportado-1').click().blur();
        cy.contains('Número Portado')
            .should('be.visible');
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#nmeroportado-1').type('9999');
        cy.contains('Mínimo de 8 caracteres')
            .should('be.visible');
        cy.get('#nmeroportado-1').type('999999999');
        cy.get('#iccid-1').click().blur();
        cy.contains('O campo é obrigatório')
            .should('be.visible');
        cy.get('#iccid-1').type('8955000')
        cy.contains('ICCID inválido')
            .should('be.visible');
        cy.get('#iccid-1').type('89555000000000000000');
        cy.get('.iccid-informative > .tao__icon').click();
        cy.contains('O que é um ICCID?')
            .should('be.visible');
        cy.contains('ICCID é um número único atribuído a cada cartão SIM utilizado em dispositivos móveis. Esse código é essencial para a identificação e autenticação do cartão SIM, permitindo que ele se conecte à rede de telefonia móvel.')
            .should('be.visible');
        cy.get('.img > img')
            .should('be.visible');
        cy.get('.close > .tao-icon > use').click();
        cy.get('.col-7 > .tao__form-input > .icon__form > .tao__icon').click();
        cy.get('.img > img')
            .should('be.visible');
        cy.contains('Passe o leitor virado na vertical, em cima do código de barras do ICCID.')
            .should('be.visible');
        cy.get('.close > .tao-icon > use').click();
        cy.get('.col-7 > .tao__form-input > .icon__form > .tao__icon').click();
        cy.get('.m-content > .tao__btn').click();


    });



});

