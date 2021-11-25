describe('Login UI', () => {

    it('Should go to /home when inputs are completed correctly and when button "Continuar" is pressed.', () => {
        cy.visit('/')

        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=input-email]').type('email.usuario@compasso.com.br')
        cy.get('[data-cy=input-password]').type('React@2021')
        cy.get('[data-cy=btn-submit]').click()

        cy.url().should('include', '/home')
    })

    it('Should show error message when password is wrong: "Ops, preencha os campos".', () => {

        cy.visit('/')
        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=btn-submit]').click()

        cy.contains('Ops, preencha os campos').should('to.have.length', 1)
    })

    it('Should show error message when password is wrong: "Ops, e-mail e senha inválida".', () => {

        cy.visit('/')
        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=input-email]').type('teste')
        cy.get('[data-cy=input-password]').type('teste')
        cy.get('[data-cy=btn-submit]').click()

        cy.contains('Ops, e-mail e senha inválida').should('to.have.length', 1)
    })

    it('Should show error message when password is wrong: "Ops, senha inválida".', () => {

        cy.visit('/')
        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=input-email]').type('email.usuario@compasso.com.br')
        cy.get('[data-cy=input-password]').type('teste')
        cy.get('[data-cy=btn-submit]').click()

        cy.contains('Ops, senha inválida').should('to.have.length', 1)
    })

    it('Should show error message when email is wrong: "Ops, e-mail inválido".', () => {

        cy.visit('/')
        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=input-email]').type('teste')
        cy.get('[data-cy=input-password]').type('React@2021')
        cy.get('[data-cy=btn-submit]').click()

        cy.contains('Ops, e-mail inválido').should('to.have.length', 1)
    })

    it('Should return to login when tryng go to /home without log in', () => {
        cy.visit('/home')

        cy.contains('Olá,').should('to.have.length', 1)

    })
})
    
describe('Logout UI', () => {
    it('Should log out when button "logout" and return to login page".', () => {

        cy.visit('/')
        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=input-email]').type('email.usuario@compasso.com.br')
        cy.get('[data-cy=input-password]').type('React@2021')
        cy.get('[data-cy=btn-submit]').click()

        cy.get('[data-cy=btn-logout]').click()
        
        cy.url().should('include', '/')

    })

    it('Should log out when button "logout" and return to login page".', () => {

        cy.visit('/')
        cy.contains('Olá,').should('to.have.length', 1)

        cy.get('[data-cy=input-email]').type('email.usuario@compasso.com.br')
        cy.get('[data-cy=input-password]').type('React@2021')
        cy.get('[data-cy=btn-submit]').click()

        cy.wait(5000)

        cy.url().should('include', '/')
    })
})
