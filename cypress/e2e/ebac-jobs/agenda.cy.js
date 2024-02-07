/// <reference types = "cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });
    
    it('Testa a inclusão de um contato', () => {
        cy.get('input[type="text"]').type('gustavo botti');        
        cy.get('input[type="email"]').type('gustavo@botti');   
        cy.get('input[type="tel"]').type('329994449');

        cy.get('button[type="submit"]').click();

        cy.contains('gustavo botti').should('be.visible');

        cy.screenshot('tela-inscricao');
    });

    it('Testa a alteração de um contato', () => {
        cy.get('button[class="edit"]').first().click();
        
        cy.get('input[type="text"]').type(' editado');        
        cy.get('input[type="email"]').type('.com');   
        cy.get('input[type="tel"]').type('29');

        cy.get('button[class="alterar"]').first().click();

        cy.contains('gustavo botti editado').should('be.visible');
        cy.contains('gustavo@botti.com').should('be.visible');
        cy.contains('32999444929').should('be.visible');

        cy.screenshot('tela-edicao');
    })

    it('Testa a remoção de um contato', () => {
        cy.get('button[class="delete"]').first().click();

        cy.contains('Deletar').should('not.exist');

        cy.screenshot('tela-remocao');
    });
});
