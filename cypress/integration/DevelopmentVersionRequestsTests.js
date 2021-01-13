
/// <reference types="cypress"/>

//run tests on the development version nakdan pro requests

describe('DevelopmentVersionRequestsTests',()=>{

  beforeEach(() => {
    cy.visit('https://sharing-nakdan-pro.netlify.app/')
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

