/// <reference types="cypress" />

describe('Testes para a home', () => {
    it('Deve renderizar 3 contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input').should('have.length', 3)
    })

    it('Deve adicionar 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Paulo Junior')
        cy.get('input[placeholder="E-mail"]').type('pauljr2@hotmail.com')
        cy.get('input[placeholder="Telefone"]').type('999-9999')
        cy.get('.adicionar').click()
    })

    it('Deve editar 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Paulo Junior')
        cy.get('input[placeholder="E-mail"]').type('pauljr2@hotmail.com')
        cy.get('input[placeholder="Telefone"]').type('999-9999')
        cy.get('.adicionar').click()

        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear().type('Paulo ')
        cy.get('input[placeholder="E-mail"]').clear().type('pauljr2@10.com')
        cy.get('input[placeholder="Telefone"]').clear().type('5555-8888')
        cy.get('.alterar').click()
    })

    /*it('Deve remover 1 contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[placeholder="Nome"]').type('Paulo Junior')
        cy.get('input[placeholder="E-mail"]').type('pauljr2@hotmail.com')
        cy.get('input[placeholder="Telefone"]').type('999-9999')
        cy.get('.adicionar').click()

        cy.get('.delete').first().click()


    })*/



})



