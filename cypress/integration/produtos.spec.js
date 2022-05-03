/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    const prod = 'Apollo Running Short'
    const qtd = 4

    it('Deve selecionar um produto da lista', () => {
        cy.get('#main-content')
            .contains(prod)
            .click()

        cy.xpath('//h1[@class="product_title entry-title"]').should('have.text', prod)
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        cy.get('#main-content')
            .contains(prod)
            .click()

        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text')
            .clear()
            .type(qtd)
        cy.xpath('//button[@class="single_add_to_cart_button button alt"]').click()
        
        cy.xpath('//span[@class="mini-cart-items"]').contains(qtd)
        cy.xpath('//div[@role="alert"]').contains(qtd+' × “'+prod+'” foram adicionados no seu carrinho.')
    });


});