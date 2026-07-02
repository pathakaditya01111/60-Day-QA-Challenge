describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  });

  it('cypress/e2e/Login.cy.js', function() {
    describe('SauceDemo Login', () => {
    
      it('Enter username', () => {
            
        cy.visit('https://www.saucedemo.com');
            
        cy.get('[data-test="username"]')
          .type('standard_user');
            describe('SauceDemo Login', () => {
        
          it('Login Successfully', () => {
                    
            cy.visit('https://www.saucedemo.com');
                    
            cy.get('[data-test="username"]')
              .type('standard_user');
                    
            cy.get('[data-test="password"]')
              .type('secret_sauce');
                    
            cy.get('[data-test="login-button"]')
              .click();
            
            describe('SauceDemo Login', () => {
            
              it('Login Successfully', () => {
                            
                cy.visit('https://www.saucedemo.com');
                            
                cy.get('[data-test="username"]')
                  .type('standard_user');
                            
                cy.get('[data-test="password"]')
                  .type('secret_sauce');
                            
                cy.get('[data-test="login-button"]')
                  .click();
                            
                cy.url()
                  .should('include', '/inventory.html');
              });
            
            });
          });
        
        });
      });
    
    });
  });
})