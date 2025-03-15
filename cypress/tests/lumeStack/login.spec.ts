
import userData from '../../fixtures/logins.json'	
import userCreate from '../../fixtures/userCreate.json'
import LoginPage from '../../pages/loginPage'
import CreateUserPage from '../../pages/createUserPage'
import { create } from 'lodash'

const loginPage = new LoginPage()
const createUserPage = new CreateUserPage()

describe('Login test', () => {

  const selectorsList = {
    usernameField: '#username',
    passwordField: '#password',
    signInField:'[data-test="signin-submit"]',
  }
  
  it('Login with valid user - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userSuccess.username,userData.userSuccess.password)
    cy.get('.MuiTabs-flexContainer')
    //outra opção   cy.get("[role='tablist']").contains('Everyone')
  });
  it('Login with invalid user - Error', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userFail.username,userData.userFail.password)
    cy.get("[role='alert']")
    //outra opcao é cy.get('[data-test="signin-error"]')
  });
});

// acima login   succ  fail
//**********************************************/
// abaixo cadastro de usuario

describe('Create User test', () => {

  const selectorsList = {
    firstNameField: '#firstName',
    lastNameField: '#lastName',
    usernameField: '#username',
    passwordField: '#password',
    confirmPasswordField: '#confirmPassword',
    signUpField:'[data-test="signup-submit"]',
  }

  it.only('Create valid user - Success', () => {
    createUserPage.accessLoginPage()
    createUserPage.loginUser(userCreate.createSuccess.firstNameField,userCreate.createSuccess.lastNameField,userCreate.createSuccess.usernameField,userCreate.createSuccess.passwordField,userCreate.createSuccess.confirmPasswordField)
    cy.get('[data-test="signup-submit"]').click()
   
    cy.get('.MuiTypography-h5')
    //outra opção   cy.get('.css-nhtccy-MuiTypography-root')
  });
  it('Create invalid user - Error', () => {
    createUserPage.accessLoginPage()
    createUserPage.loginUser(userCreate.createFail.firstNameField,userCreate.createFail.lastNameField,userCreate.createFail.usernameField,userCreate.createFail.passwordField,userCreate.createFail.confirmPasswordField)

    cy.get('#confirmPassword-helper-text')       //senha diferente
    // cy.get('#firstName').clear().type('')
    // cy.get('#lastName').clear().type('')
    // cy.get('#username').clear().type('')
    // cy.get('#password').clear().type('123')
    // cy.get('#firstName-helper-text')         //primeiro nome faltando
    // cy.get('#lastName-helper-text')          // sobrenome faltando
    // cy.get('#username-helper-text')          //username faltando
    // cy.get('#password-helper-text')          // senha minima 4 digitos
    
       
  });
});