Cypress.Commands.add("loginSauce", (username, password) => {

    cy.visit("https://www.saucedemo.com");

    cy.get('[data-test="username"]').type(username);

    cy.get('[data-test="password"]').type(password);

    cy.get('[data-test="login-button"]').click();

});



Cypress.Commands.add("loginOrangeHRM", (username, password) => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    cy.get('input[name="username"]').type(username);

    cy.get('input[name="password"]').type(password);

    cy.get('button[type="submit"]').click();

});


Cypress.Commands.add("addEmployee", (firstName, lastName) => {

    cy.contains("PIM").click();

    cy.contains("Add Employee").click();

    cy.get('input[name="firstName"]').type(firstName);

    cy.get('input[name="lastName"]').type(lastName);

    cy.get('button[type="submit"]').click();

});