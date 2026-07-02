class LoginPage {

    username = 'input[name="username"]';
    password = 'input[name="password"]';
    loginBtn = 'button[type="submit"]';

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    login(username, password) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginBtn).click();
    }

}

export default LoginPage;