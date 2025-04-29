describe('Homepage Carousel Functionality', () => {
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  });

  it('checks that 3 carousel items are visible', () => {
    cy.get('#carousel0 .carousel-item').should('have.length', 3);
    cy.get('#carousel0 .carousel-item').each(($el, index) => {
      if ($el.hasClass('active')) {
        cy.wrap($el).should('be.visible');
      }
    });
  });

  it('should navigate using the left and right control buttons', () => {
    cy.get('#carousel0 .carousel-control-next').click();
    cy.wait(1000);
    cy.get('#carousel0 .carousel-item.active').should('be.visible');

    cy.get('#carousel0 .carousel-control-prev').click();
    cy.wait(1000);
    cy.get('#carousel0 .carousel-item.active').should('be.visible');
  });

  it('should navigate using the 3 indicator dots', () => {
    cy.get('#carousel0 .carousel-indicators > li').should('have.length', 3);

    cy.get('#carousel0 .carousel-indicators > li').each(($dot, index) => {
      cy.wrap($dot).click();
      cy.wait(1000);
      cy.get('#carousel0 .carousel-item.active')
        .invoke('index')
        .should('eq', index);
    });
  });
});
