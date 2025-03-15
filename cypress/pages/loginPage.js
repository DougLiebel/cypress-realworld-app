class LoginPage{
    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            signInField:'[data-test="signin-submit"]',
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }
    loginUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInField).click()
    }

}
export default LoginPage