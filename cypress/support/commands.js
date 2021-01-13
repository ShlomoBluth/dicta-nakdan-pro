Cypress.Commands.add('nakdanProRequest',({status=200,message='',delaySeconds=0})=>{
  cy.intercept( '/api', {
    delayMs:1000*delaySeconds,
    body:'it worked!',
    statusCode: status
  },
  ).as('api')
  cy.get('a[class="welcome-close-link"]').click({force: true})
  cy.get('textarea[placeholder="הזן טקסט כאן"]').type('משה קיבל תורה')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('div[class="run-button"]').within(()=>{
      cy.get('button').click({force: true})
  })

  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  }
      
})  