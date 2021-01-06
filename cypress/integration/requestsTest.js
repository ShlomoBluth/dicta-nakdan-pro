/// <reference types="cypress"/>

//run tests on the nakdan pro requests

describe('RequestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://nakdanpro.dicta.org.il/')
  })

  it('Error message for response with a delay of 2 minutes when clicking the run butten'+
  ' of nakdanpro page',()=>{
    cy.nakdanRequest({
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:60*2
    })
  })

  
  it('Error message for response with status code 500 when clicking the run butten of nakdanpro page',
  ()=>{
    cy.nakdanRequest({
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })
  

})