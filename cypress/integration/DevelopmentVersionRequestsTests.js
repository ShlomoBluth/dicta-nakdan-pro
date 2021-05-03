
/// <reference types="cypress"/>

//run tests on the development version nakdan pro requests
let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

  describe('DevelopmentVersionRequestsTests',()=>{

    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        Cypress.config({
          viewportWidth: size[0],
          viewportHeight: size[1]
        })
        cy.viewport(size[0], size[1])
      } else {
        Cypress.config({
          viewportWidth: 375,
          viewportHeight: 812
        })
      cy.viewport(size)
      }
      cy.visit('/')
    })
  
    it('Error message for response with a delay of 2 minutes when clicking the run butten'+
    ' of development version nakdanpro page',()=>{
      cy.nakdanProRequest({
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
        delaySeconds:60*2
      })
    })
  
    
    it('Error message for response with status code 500 when clicking the run butten of'+
    ' development version nakdanpro page',()=>{
      cy.nakdanProRequest({
        status:500,
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
      })
    })
  })
  
  

})


