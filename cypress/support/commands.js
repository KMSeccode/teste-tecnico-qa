export const generateRandomString = (length = 10) => {
    return Cypress._.random(0, 1e6).toString(36).substr(0, length);
};

export const waitForElement = (selector, timeout = 10000) => {
    return cy.get(selector, { timeout }).should('be.visible');
};
