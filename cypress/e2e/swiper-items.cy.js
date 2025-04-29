/// <reference types="cypress" />

describe('LambdaTest Playground - Product Carousel', () => {
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/') // adjust URL if needed
    })
  
    it('performs product carousel checks', () => {
      // 1. Count swiper items and log
      cy.get('.swiper-slide')
        .then($items => {
          cy.log(`Number of swiper items: ${$items.length}`)
        })
  
      // 2. Check price contains text and $
      cy.get('.price-new')
        .should('exist')
        .each($price => {
          const text = $price.text()
          expect(text.trim()).to.not.be.empty
          expect(text).to.include('$')
        })
  
      // 3. Image src is valid and visible
      cy.get('.swiper-slide img')
        .should('be.visible')
        .and($img => {
          const src = $img.attr('src')
          expect(src, 'Image src should exist').to.match(/^https?:\/\//)
        })
  
      // 4. Product name exists
      cy.get('h4.title .text-ellipsis-2')
        .each($el => {
          const text = $el.text().trim()
          expect(text).to.not.be.empty
        })
    })
  })
  