
/// <reference types="cypress"/>

//run tests on the development version nakdan pro requests
let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

  describe('DevelopmentVersionRequestsTests',()=>{

    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
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


