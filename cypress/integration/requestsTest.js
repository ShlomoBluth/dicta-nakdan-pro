/// <reference types="cypress"/>

//run tests on the nakdan pro requests

describe('BadRequests',()=>{

    
  beforeEach(() => {
    cy.visit('https://nakdanpro.dicta.org.il/')
  })


  it('Successful request with 60 seconds delay of response when clicking the run butten of'+
  ' nakdan pro page '
  ,()=>{
    cy.nakdanProRequest({
      delaySeconds:60
    })
  })

  it('Message after request failed with 61 seconds delay of response when clicking the ron butten'+
  ' of nakdan pro page'
  ,()=>{
    cy.nakdanProRequest({
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:61
      })
  })

  
  it('Message after request failed with status code 500 when clicking the ron butten of nakdan '+
  'pro page'
  ,()=>{
    cy.nakdanProRequest({
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })

  
   
    
})