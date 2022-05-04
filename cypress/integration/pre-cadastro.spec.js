/// <reference types="cypress" />

describe('Funcionalidade Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.xpath('//i[contains(@class,"unfollow")]').click()
    });

    const { faker } = require('@faker-js/faker');

    it('Deve completar o pré cadastro com sucesso', () => {

        const email = faker.internet.email();
        const senha = faker.internet.password();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.xpath('//form[@class="register widget"]/p[@class="form-group form-row"]/input[@type="submit"]').click()
        cy.xpath('//li[contains(@class,"edit-account")]').click()
        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('#account_email').should('contain.value',email)
        cy.xpath('//button[@name="save_account_details"]').click()
        
        cy.xpath('//div[@role="alert"]').should('contain.text','Detalhes da conta modificados com sucesso.')
    });

    it('Deve cmpletar o pré cadastro com sucesso - Usando Commands', () => {
        const email = faker.internet.email();

        cy.register(email,'pwd@hard12','Flavia','Santos')
        cy.xpath('//div[@role="alert"]').should('contain.text','Detalhes da conta modificados com sucesso.')
    });

});