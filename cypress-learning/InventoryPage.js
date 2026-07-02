class InventoryPage {

    backpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    bikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    cartBadge = '.shopping_cart_badge';
    cart = '.shopping_cart_link';

    addBackpack() {
        cy.get(this.backpack).click();
    }

    addBikeLight() {
        cy.get(this.bikeLight).click();
    }

    verifyCartCount(count) {
        cy.get(this.cartBadge).should('have.text', count);
    }

    openCart() {
        cy.get(this.cart).click();
    }

}

export default InventoryPage;