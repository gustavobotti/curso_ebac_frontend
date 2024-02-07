/// <reference types = "cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Testa a inclusão de um contato', () => {
        cy.get('input[type="text"]').type('gustavo botti');        
        cy.get('input[type="email"]').type('gustavo@botti.com');   
        cy.get('input[type="tel"]').type('32999444929');

        cy.get('button[type="submit"]').click();

        cy.contains('gustavo botti').should('be.visible');

        cy.screenshot('tela-inscricao')
    })

    // it('Testa a alteração de um contato', () => {
    //     cy.get('.Vaga_vagaLink__DeFkk').first().click()
    //     cy.get('input[type="text"]').type('gustavo botti')
    //     cy.get('input[name="email"]').type('gustavo@botti.com')
    //     cy.get('input[name="telefone"]').type('32 9 1234-5678')
    //     cy.get('input[name="endereco"]').type('Rua ABC n88, Bairro Cypress, Juiz de Fora - MG')
    //     cy.get('#linux').check()
    //     cy.get('select[name="escolaridade"]').select('outros')
    //     cy.get('.Aplicacao_button__tw2AE').click()

    //     cy.on('window:alert', (conteudo) => {
    //         expect(conteudo).contain('Obrigado pela candidatura!')
    //     })
    // })

    // it('Testa a remoção de um contato', () => {
    //     cy.get('.Vaga_vagaLink__DeFkk').first().click()
    //     cy.get('input').should('have.length', 7)
    //     cy.screenshot('tela-inscricao')
    // })
})