/// <reference types="cypress" />

describe('Mocked Product Carousel Test', () => {
    beforeEach(() => {
      cy.visit('cypress/fixtures/product-carousel.html') 
    })
  
    it('checks swiper items, prices, image visibility, and product names', () => {
      // 1. Count swiper items
      cy.get('.swiper-slide')
        .should('have.length.at.least', 1)
        .then($items => {
          cy.log(`Number of swiper items: ${$items.length}`)
        })
  
      // 2. Prices should exist and contain $
      cy.get('.price-new')
        .each($price => {
          const text = $price.text()
          expect(text.trim()).to.not.be.empty
          expect(text).to.include('$')
        })
  
      // 3. Images are visible and have a valid URL
      cy.get('.swiper-slide img')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('match', /^https?:\/\//)
  
      // 4. Product names should have text
      cy.get('h4.title .text-ellipsis-2')
        .each($el => {
          expect($el.text().trim()).to.not.be.empty
        })
    })
  })
  