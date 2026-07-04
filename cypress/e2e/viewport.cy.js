describe("Desktop View", () => {

    beforeEach(() => {
        cy.viewport(1280, 800);

        cy.visit("https://www.saucedemo.com");

        cy.loginSauce("standard_user", "secret_sauce");
    });

    it("Should display products correctly", () => {

        cy.get(".inventory_item")
            .should("have.length", 6);

        cy.get(".shopping_cart_link")
            .should("be.visible");

    });

});



describe("Tablet View", () => {

    beforeEach(() => {

        cy.viewport(768, 1024);

        cy.visit("https://www.saucedemo.com");

        cy.loginSauce("standard_user", "secret_sauce");

    });

    it("Verify inventory page", () => {

        cy.get(".inventory_item")
            .should("have.length", 6);

    });

});


describe("Mobile View", () => {

    beforeEach(() => {

        cy.viewport(375, 812);

        cy.visit("https://www.saucedemo.com");

        cy.loginSauce("standard_user", "secret_sauce");

    });

    it("Verify inventory page on mobile", () => {

        cy.get(".inventory_item")
            .should("have.length", 6);

        cy.get(".shopping_cart_link")
            .should("be.visible");

    });

});