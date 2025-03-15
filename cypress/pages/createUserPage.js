class CreateUserPage {
    selectorsList() {
        const selectors = {
            firstNameField: '#firstName',
            lastNameField: '#lastName',
            usernameField: '#username',
            passwordField: '#password',
            confirmPasswordField: '#confirmPassword',
            signUpField:'[data-test="signup-submit"]',
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/signup')
    }
    loginUser(firstNameField, lastNameField, usernameField, passwordField, confirmPasswordField) {
        cy.get(this.selectorsList().firstNameField).type(firstNameField)
        cy.get(this.selectorsList().lastNameField).type(lastNameField)
        cy.get(this.selectorsList().usernameField).type(usernameField)
        cy.get(this.selectorsList().passwordField).type(passwordField)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPasswordField)

    }

}
export default CreateUserPage