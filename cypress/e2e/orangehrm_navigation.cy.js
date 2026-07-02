import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import PIMPage from "../pages/PIMPage";

const login = new LoginPage();
const dashboard = new DashboardPage();
const pim = new PIMPage();

describe("OrangeHRM Navigation", () => {

    beforeEach(() => {

        login.visit();

    });

    it("TC01 Login Successfully", () => {

        cy.intercept("POST", "**/auth/validate").as("login");

        login.login("Admin", "admin123");

        cy.wait("@login");

        dashboard.verifyDashboard();

    });

    it("TC02 Verify Quick Launch Widget", () => {

        cy.intercept("POST", "**/auth/validate").as("login");

        login.login("Admin", "admin123");

        cy.wait("@login");

        dashboard.verifyQuickLaunch();

    });

    it("TC03 Navigate to PIM", () => {

        cy.intercept("POST", "**/auth/validate").as("login");

        login.login("Admin", "admin123");

        cy.wait("@login");

        pim.openPIM();

        pim.verifyPIMPage();

    });

    it("TC04 Verify URL after PIM Navigation", () => {

        cy.intercept("POST", "**/auth/validate").as("login");

        login.login("Admin", "admin123");

        cy.wait("@login");

        pim.openPIM();

        cy.url().should("include", "/pim");

    });

    it("TC05 Verify Dashboard Menu Exists", () => {

        cy.intercept("POST", "**/auth/validate").as("login");

        login.login("Admin", "admin123");

        cy.wait("@login");

        cy.contains("Dashboard")
            .should("be.visible");

    });

});