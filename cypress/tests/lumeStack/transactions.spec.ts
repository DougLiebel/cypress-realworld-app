import userData from '../../fixtures/logins.json'	
import LoginPage from '../../pages/loginPage'

const loginPage = new LoginPage()

describe('Transactions', () => {

    it('Login and Transaction with sufficient balance Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginUser(userData.userSuccess.username,userData.userSuccess.password)
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-search-input"]').type('Ruthie')
        cy.get('[data-test="user-list-item-M1ty1gR8B3"]').click()
        cy.get('#amount').type('500')
        cy.get('#transaction-create-description-input').type('Teste')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.get('.MuiAlert-message').contains('Submitted!')
        cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root').contains('Paid')
    })


    it('Login and with insufficient balance', () => {
        loginPage.accessLoginPage()
        loginPage.loginUser(userData.userSuccess.username,userData.userSuccess.password)
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.get('[data-test="user-list-search-input"]').type('Ruthie')
        cy.get('[data-test="user-list-item-M1ty1gR8B3"]').click()
        cy.get('#amount').type('10000')
        cy.get('#transaction-create-description-input').type('Teste')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.get('.MuiAlert-message').contains('INSUFFICIENT')
        

    })


})