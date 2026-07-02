import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe("SauceDemo POM", () => {

    it("TC_01 Add Backpack to Cart", () => {
        inventoryPage.addBackpack();
        inventoryPage.verifyCartCount("1");
    });

    it("TC_02 Add Two Products", () => {
        inventoryPage.addBackpack();
        inventoryPage.addBikeLight();
        inventoryPage.verifyCartCount("2");
    });

    it("TC_03 Open Cart", () => {
        inventoryPage.addBackpack();
        inventoryPage.openCart();
        cy.url().should("include", "cart");
    });

    it("TC_05 Complete Checkout", () => {
        inventoryPage.addBackpack();
        inventoryPage.openCart();
        cartPage.checkout();
        checkoutPage.checkout("Aditya", "Pathak", "33700");
        checkoutPage.finishOrder();
        checkoutPage.verifyOrderComplete();
    });

});