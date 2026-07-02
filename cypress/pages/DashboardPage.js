class DashboardPage {

    quickLaunch = '.oxd-grid-3';

    verifyDashboard() {
        cy.url().should('include', '/dashboard');
    }

    verifyQuickLaunch() {
        cy.contains('Quick Launch').should('be.visible');
    }

}

export default DashboardPage;