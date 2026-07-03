import EmployeePage from "../pages/EmployeePage";

const employee = new EmployeePage();

describe("Data Driven Employee Test", () => {

    before(() => {

        cy.loginOrangeHRM("Admin", "admin123");

    });

    it("Add Multiple Employees", () => {

        cy.fixture("employees").then((employees) => {

            employees.forEach((emp) => {

                employee.openPIM();

                employee.clickAddEmployee();

                employee.addEmployee(
                    emp.firstName,
                    emp.lastName,
                    emp.employeeId
                );

            });

        });

    });

});

cy.fixture("employees").then((employees) => {

    cy.wrap(employees).each((emp) => {

        employee.openPIM();

        employee.clickAddEmployee();

        employee.addEmployee(
            emp.firstName,
            emp.lastName,
            emp.employeeId
        );

    });

});



it("Search Every Employee", () => {

    cy.fixture("employees").then((employees) => {

        cy.wrap(employees).each((emp) => {

            employee.openPIM();

            employee.searchEmployee(emp.employeeId);

            cy.contains(emp.employeeId)
                .should("be.visible");

        });

    });

});