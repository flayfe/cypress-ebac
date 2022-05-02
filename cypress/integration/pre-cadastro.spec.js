/// <reference types="cypress" />

describe('Funcionalidade Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {

        cy.xpath('//i[contains(@class,"unfollow")]').click()
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.xpath('//form[contains(@class, "register widget")]|input[@type="submit"]').click()
    });
    
});