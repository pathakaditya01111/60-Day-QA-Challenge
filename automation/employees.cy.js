describe("GET /employees", () => {

  it("should return all employees", () => {

    cy.request("/employees").then((response) => {

      expect(response.status).to.eq(200);

      expect(response.body.employees).to.have.length(3);

      expect(response.body.employees[0].firstName).to.eq("John");

      expect(response.body.employees[1].department).to.eq("Finance");

    });

  });

});