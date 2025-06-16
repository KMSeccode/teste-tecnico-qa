import { LOGIN_SELECTORS } from '../support/constants';

class LoginPage {
    elements = {
    usernameInput: () => cy.get(LOGIN_SELECTORS.username),
    passwordInput: () => cy.get(LOGIN_SELECTORS.password),
    submitButton: () => cy.get(LOGIN_SELECTORS.submitButton),
    flashMessage: () => cy.get(LOGIN_SELECTORS.flashMessage),
    };

    visit() {
        cy.visit('/login');
        return this;
    }

    typeUsername(username) {
        this.elements.usernameInput().clear().type(username);
        return this;
    }

    typePassword(password) {
        this.elements.passwordInput().clear().type(password);
        return this;
    }

    submit() {
        this.elements.submitButton().click();
        return this;
    }

    login(username, password) {
        this.typeUsername(username)
        .typePassword(password)
        .submit();
        return this;
    }
    
    assertFlashMessage(expectedText) {
        this.elements.flashMessage()
        .should('be.visible')
        .and('contain', expectedText);
        return this;
    }
}

export default new LoginPage();