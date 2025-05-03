/// <reference types="cypress" />

describe('Ecommerce Login Form Test', () => {
    it('should display the login form and allow user to enter credentials', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  
      // Check that the login form is visible
      cy.get('form[action*="account/login"]').should('be.visible');
  
      // Type email and password into input fields
      cy.get('#input-email').type(Cypress.env('email')); 
      cy.get('#input-password').type(Cypress.env('password')); 
  
      // Submit the form
      cy.get('input[type="submit"][value="Login"]').click();
  
      //  Assertion to confirm redirection or error message
      cy.url().should('include', 'account'); 
    });
  });
  