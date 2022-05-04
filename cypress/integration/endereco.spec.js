/// <reference types="cypress" />

describe('Funcionalidade endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuário,dados.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
    });
});