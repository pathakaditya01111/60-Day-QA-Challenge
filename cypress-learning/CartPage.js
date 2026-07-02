class CartPage {

    checkoutBtn = '[data-test="checkout"]';

    checkout() {
        cy.get(this.checkoutBtn).click();
    }

}

export default CartPage;