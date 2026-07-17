describe("GET /leave-request", () => {

  it("should return all leave request", () => {

    cy.request("/leave-request").then((response) => {

      cy.log(JSON.stringify(response.body));
      console.log(response.body);

      expect(response.status).to.eq(200);

    });

  });

});