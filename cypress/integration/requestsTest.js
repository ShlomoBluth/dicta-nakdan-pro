/// <reference types="cypress"/>

//run tests on the nakdan pro requests
let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {


  describe('RequestsTests',()=>{

    
    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'https://nakdanpro.dicta.org.il/'})
    })
  
  
    it('Error message for api response with a delay of 2 minutes when clicking the run butten'+
    ' of nakdanpro page',()=>{
      cy.nakdanProRequest({
        url:'/api',
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
        delaySeconds:60*2
      })
    })
  
  
  
    it('Error message for api response with status code 500 when clicking the run butten'+
    ' of nakdanpro page',()=>{
      cy.nakdanProRequest({
        url:'/api',
        status:500,
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
      })
    })
    
  
  })
})

