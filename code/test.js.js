describe("SauceDemo Login", () => {

    before(function () {

        cy.fixture("saucedemo-users")
            .as("users");

    });

    it("Login as Standard User", function () {

        cy.loginSauce(
            this.users.standardUser.username,
            this.users.standardUser.password
        );

        cy.url().should("include", "inventory");

    });

});



describe("OrangeHRM Login", () => {

    before(function () {

        cy.fixture("orangehrm-users")
            .as("users");

    });

    it("Admin Login", function () {

        cy.loginOrangeHRM(
            this.users.admin.username,
            this.users.admin.password
        );

        cy.url().should("include", "dashboard");

    });

});