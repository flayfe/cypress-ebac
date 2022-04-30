/// <reference types="cypress" />

context('Funcionalidade Login', () =>{
    it('Deve fazer login com sucesso',() =>{
        cy.visit('/')
        cy.xpath('\\').click()
    })

    it('Deve exibir mensagem de erro ao inserir usuário ou senha incorretos', () =>{

    })
})