import LoginPage from '../../pages/LoginPage';
import { TEST_DATA } from '../../support/constants';

    describe('Login Feature', () => {
        beforeEach(() => {
            LoginPage.visit();
    });

    context('Negative Tests', () => {
        //Garante a presença da mensagem de erro quando não é fornecido usuário
        it('should display error when username is missing', () => {
            LoginPage
            .typePassword(TEST_DATA.validUser.password)
            .submit()
            .assertFlashMessage('Your username is invalid!');
        });

        //Garante a presença da mensagem de erro quando não é fornecida senha
        it('should display error when password is missing', () => {
            LoginPage
            .typeUsername(TEST_DATA.validUser.username)
            .submit()
            .assertFlashMessage('Your password is invalid!');
        });

        //Garante a presença da mensagem de erro quando as credenciais estão incorretas
        it('should display error for invalid credentials', () => {
            LoginPage
            .login(TEST_DATA.invalidUser.username, TEST_DATA.invalidUser.password)
            .assertFlashMessage('Your username is invalid!');
        });
    });

    
    context('Positive Tests', () => {
        //Garante o login com credenciais válidas
        it('should login successfully with valid credentials', () => {
            LoginPage
            .login(TEST_DATA.validUser.username, TEST_DATA.validUser.password)
            .assertFlashMessage('You logged into a secure area!');
        });

        //Garante o redirecionamento para a área segura após login
        it('should redirect to secure area after login', () => {
            LoginPage.login(TEST_DATA.validUser.username, TEST_DATA.validUser.password);
            cy.url().should('include', '/secure');
        });
    });

    context('Security Tests', () => {
        //Garante a presença da mensagem de erro quando a área logada é acessada diretamente pela URL
        it('should not access secure area without login', () => {
            cy.visit('/secure');
            LoginPage.assertFlashMessage('You must login to view the secure area!');
        });
    });

    context('PDF Credentials Test', () => {
        //Garante o login com credenciais do pdf fornecido
        it('should login successfully with valid credentials mentioned in PDF', () => {
            LoginPage
            .login(TEST_DATA.pdfUser.username, TEST_DATA.pdfUser.password)
            .assertFlashMessage('You logged into a secure area!');
        });
        
        //Garante a presença da mensagem de erro se as credenciais do pdf estiverem incorretas
        it('should reject credentials mentioned in PDF', () => {
            LoginPage
            .login(TEST_DATA.pdfUser.username, TEST_DATA.pdfUser.password)
            .assertFlashMessage('Your username is invalid!');
        });
    });
});