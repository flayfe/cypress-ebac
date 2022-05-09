/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuário, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando page objects', () => {
        EnderecoPage.editarEnderecoFaturamento('Felipe', 'Ferreira', 'Google', 'Brasil', 'Rua sao lourenco', '7', 'Brasilia', 'Distrito Federal', '72145819', '999999999', 'abacate@teste.com')

        cy.get('.woocommerce-message').should('contain.text', 'Endereço alterado com sucesso')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando massa de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].firstName,
            dadosEndereco[1].lastName,
            dadosEndereco[1].company,
            dadosEndereco[1].country,
            dadosEndereco[1].address,
            dadosEndereco[1].number,
            dadosEndereco[1].city,
            dadosEndereco[1].state,
            dadosEndereco[1].postcode,
            dadosEndereco[1].phoneNumber,
            dadosEndereco[1].email
        )

        cy.get('.woocommerce-message').should('contain.text', 'Endereço alterado com sucesso')
    });

    it.only('Deve fazer cadastro de entrega com sucesso - Usando page objects', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEndereco[2].firstName,
            dadosEndereco[2].lastName,
            dadosEndereco[2].company,
            dadosEndereco[2].country,
            dadosEndereco[2].address,
            dadosEndereco[2].number,
            dadosEndereco[2].city,
            dadosEndereco[2].state,
            dadosEndereco[2].postcode)

        cy.get('.woocommerce-message').should('contain.text', 'Endereço alterado com sucesso')
    })
});