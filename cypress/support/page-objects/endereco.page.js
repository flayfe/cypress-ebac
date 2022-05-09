class EnderecoPage {
    editarEnderecoFaturamento(firstName, lastName, company, country, address, number, city, state, postcode, phoneNumber, email) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address').click()
        cy.xpath('//header/h3[contains(text(),"Billing")]/../a[@class="edit"]').click()

        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_company').clear().type(company)

        cy.get('#select2-billing_country-container')
            .click()
            .type(country)
            .get('[aria-selected="true"]')
            .click()

        cy.get('#billing_address_1').clear().type(address)
        cy.get('#billing_address_2').clear().type(number)
        cy.get('#billing_city').clear().type(city)

        cy.get('#select2-billing_state-container')
            .click()
            .type(state + '{enter}')

        cy.get('#billing_postcode').clear().type(postcode)
        cy.get('#billing_phone').clear().type(phoneNumber)
        cy.get('#billing_email').clear().type(email)

        cy.get('.button').click()
    }

    editarEnderecoEntrega(firstName,lastName,company,country,address,number,city,state,postcode) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address').click()
        cy.xpath('//header/h3[contains(text(),"Shipping")]/../a[@class="edit"]').click()

        cy.get('#shipping_first_name').clear().type(firstName)
        cy.get('#shipping_last_name').clear().type(lastName)
        cy.get('#shipping_company').clear().type(company)

        cy.get('#select2-shipping_country-container')
            .click()
            .type(country + '{enter}')

        cy.get('#shipping_address_1').clear().type(address)
        cy.get('#shipping_address_2').clear().type(number)
        cy.get('#shipping_city').clear().type(city)

        cy.get('#select2-shipping_state-container')
            .click()
            .type(state + '{enter}')

        cy.get('#shipping_postcode').clear().type(postcode)

        cy.get('.button').click()
    }
}

export default new EnderecoPage()