describe("POST /employees", () => {

  it("should create a new employee", () => {

    cy.request({
      method: "POST",
      url: "/employees",
      body: {
        firstName: "Alex",
        lastName: "Walker",
        department: "IT",
        jobTitle: "Developer"
      }
    }).then((response) => {

      expect(response.status).to.eq(201);

      expect(response.body.message)
        .to.eq("Employee created successfully");

      expect(response.body.employee.firstName)
        .to.eq("Alex");

    });

  });

});