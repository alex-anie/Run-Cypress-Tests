/// <reference types="cypress" />

describe('Swiper DOM Visibility Check', () => {
    beforeEach(() => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
    })
  
    it('checks if any element has display:block or visibility:hidden', () => {
      // 1. Check for any element with display: block
      cy.get('*').then(($all) => {
        const blockElements = [...$all].filter(el => {
          const style = window.getComputedStyle(el)
          return style.display === 'block'
        })
  
        if (blockElements.length > 0) {
          cy.log(`Found ${blockElements.length} elements with display: block`)
        } else {
          cy.log('No elements with display: block found')
        }
      })
  
      // 2. Check for elements with visibility: hidden
      cy.get('*').then(($all) => {
        const hiddenElements = [...$all].filter(el => {
          const style = window.getComputedStyle(el)
          return style.visibility === 'hidden'
        })
  
        if (hiddenElements.length > 0) {
          cy.log(`Found ${hiddenElements.length} elements with visibility: hidden`)
          hiddenElements.forEach(el => {
            cy.log(`Hidden element: ${el.tagName}.${el.className}`)
          })
        } else {
          cy.log('No elements with visibility: hidden found')
        }
      })
    })
  })
  