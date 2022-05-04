// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuário, senha) => {
    cy.xpath('//i[contains(@class,"unfollow")]').click()
    cy.get('#username').type(usuário)
    cy.get('#password').type(senha)
    cy.xpath('//form[contains(@class,"woocommerce-form-login")]/input[@type="submit"]').click()
})

Cypress.Commands.add('register', (email, senha, firstName, lastName) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.xpath('//form[@class="register widget"]/p[@class="form-group form-row"]/input[@type="submit"]').click()
    cy.xpath('//li[contains(@class,"edit-account")]').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('#account_email').should('contain.value', email)
    cy.xpath('//button[@name="save_account_details"]').click()
})

Cypress.Commands.add('addCart', (prod, qtd) => {
    cy.get('#main-content')
        .contains(prod)
        .click()
    cy.get('.button-variable-item-34').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text')
        .clear()
        .type(qtd)
    cy.xpath('//button[@class="single_add_to_cart_button button alt"]').click()
})