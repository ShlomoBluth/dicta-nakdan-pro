/// <reference types="cypress"/>

//run tests on the nakdan pro requests

describe('RequestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://nakdanpro.dicta.org.il/')
  })

  it('Message after request failed with 2 minutes delay of response when clicking the ron butten'+
    ' of nakdan page'
    ,()=>{
        cy.nakdanRequest({
          message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
          delaySeconds:60*2
        })
    })

  
   it('Message after request failed with status code 500 when clicking the ron butten of nakdan page'
    ,()=>{
        cy.nakdanRequest({
          status:500,
          message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
        })
    })
  

})