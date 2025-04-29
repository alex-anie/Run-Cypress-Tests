describe('Homepage Carousel Functionality', () => {
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  });

  it('checks that 3 carousel items are visible', () => {
    cy.get('#entry_217960 .carousel-item').should('have.length', 3);
    cy.get('#entry_217960 .carousel-item').each(($el, index) => {
      if ($el.hasClass('active')) {
        cy.wrap($el).should('be.visible');
      }
    });
  });

  it('should navigate using the left and right control buttons', () => {
    cy.get('#entry_217960 .carousel-control-next').click({force: true});
    cy.wait(1000);
    cy.get('#entry_217960 .carousel-item.active').should('be.visible');

    cy.get('#entry_217960 .carousel-control-prev').click({force: true});
    cy.wait(1000);
    cy.get('#entry_217960 .carousel-item.active').should('be.visible');
  });

  it('should navigate using the 3 indicator dots', () => {
    cy.get('#entry_217960 .carousel-indicators > li').should('have.length', 3);

    cy.get('#entry_217960 .carousel-indicators > li').each(($dot, index) => {
      cy.wrap($dot).click();
      cy.wait(1000);
      cy.get('#entry_217960 .carousel-item.active')
        .invoke('index')
        .should('eq', index);
    });
  });
});
