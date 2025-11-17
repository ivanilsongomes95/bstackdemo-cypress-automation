
describe('Fluxo completo de compra no bstackdemo', ()=> {

    it('Deve realizar login, adicionar produto e finalizar checkout', ()=> {


        // Acessa página
        cy.visit('https://bstackdemo.com/')


        // Login
        cy.get('[id="signin"]').click()
        cy.get('[id="username"]').click().type('demouser{enter}') 
        cy.get('[id="password"]').click().type('testingisfun99{enter}') 
        cy.get('#login-btn').click()


        // Adiciona o primeiro produto ao carrinho
        cy.get('.shelf-item').first().find('.shelf-item__buy-btn').click()


        // Ir para chekout
        cy.contains('.buy-btn', 'Checkout').click()


        // Preencher endereço
        cy.get('[id=firstNameInput]').click().type('Ivanilson')        
        cy.get('[id=lastNameInput]').click().type('Gomes')
        cy.get('[id=addressLine1Input]').click().type('Rua Vlaminck')
        cy.get('[id=provinceInput]').click().type('RJ')
        cy.get('[id=postCodeInput]').click().type('20771-360')


        // Finalizar compra
        cy.get('button[type="submit"]').click()


        // Validar mensagem de sucesso
        cy.contains('Your Order has been successfully placed').should('be.visible')


    })
});