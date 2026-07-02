class PIMPage {

    pimMenu = 'a[href*="pim"]';

    openPIM() {
        cy.get(this.pimMenu).click();
    }

    verifyPIMPage() {
        cy.url().should('include', '/pim');
        cy.contains('Employee Information').should('be.visible');
    }

}

export default PIMPage;