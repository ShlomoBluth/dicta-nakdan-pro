Cypress.Commands.add('nakdanProRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', '/api', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.get('a[class="welcome-close-link"]').click({force: true})
  cy.get('textarea[placeholder="הזן טקסט כאן"]').type('משה קיבל תורה')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('div[class="run-button"]').within(()=>{
      cy.get('button').click({force: true})
  })

  if(delaySeconds>0){
    cy.get(/[class*="spinner"]|[class*="loader"]/g,{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  }
      
})  