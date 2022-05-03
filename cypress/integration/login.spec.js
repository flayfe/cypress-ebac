/// <reference types="cypress"/>
/// <reference types="cypress-xpath" />

const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve fazer login com sucesso', () => {

        cy.xpath('//i[contains(@class,"unfollow")]').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.xpath('//form[contains(@class,"woocommerce-form-login")]/input[@type="submit"]').click()

        cy.xpath('//h1[@class="page-title"]').should('contain', 'Minha conta')
        cy.xpath('//div[@class="woocommerce-MyAccount-content"]').should('contain', 'Olá, aluno_ebac')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {

        cy.xpath('//i[contains(@class,"unfollow")]').click()
        cy.get('#username').type(perfil.usuário)
        cy.get('#password').type(perfil.senha)
        cy.xpath('//form[contains(@class,"woocommerce-form-login")]/input[@type="submit"]').click()

        cy.xpath('//h1[@class="page-title"]').should('contain', 'Minha conta')
        cy.xpath('//div[@class="woocommerce-MyAccount-content"]').should('contain', 'Olá, aluno_ebac')
    })

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.xpath('//i[contains(@class,"unfollow")]').click()
            cy.get('#username').type(dados.usuário)
            cy.get('#password').type(dados.senha, {log: false})
            cy.xpath('//form[contains(@class,"woocommerce-form-login")]/input[@type="submit"]').click()

            cy.xpath('//h1[@class="page-title"]').should('contain', 'Minha conta')
            cy.xpath('//div[@class="woocommerce-MyAccount-content"]').should('contain', 'Olá, aluno_ebac')
        })
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {

        cy.xpath('//i[contains(@class,"unfollow")]').click()
        cy.get('#username').type('alunoebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.xpath('//form[contains(@class,"woocommerce-form-login")]/input[@type="submit"]').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')
    })

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {

        cy.xpath('//i[contains(@class,"unfollow")]').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testetestecom')
        cy.xpath('//form[contains(@class,"woocommerce-form-login")]/input[@type="submit"]').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})