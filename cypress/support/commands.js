Cypress.Commands.add('nakdanProRequest',({status=200,message='',delaySeconds=0})=>{
  cy.intercept( '/api', {
    delayMs:1000*delaySeconds,
    body:'it worked!',
    statusCode: status
  },
  ).as('api')
  cy.intercept('POST', '/genreclassify', {
    delayMs:1000*delaySeconds,
    body:'it worked!',
    statusCode: status
  }
  ).as('genreclassify')
  cy.get('a[class="welcome-close-link"]').click({force: true})
  cy.get('textarea[placeholder="הזן טקסט כאן"]').type('משה קיבל תורה')
    if(message.length>0){
      cy.contains(message).should('not.exist')
    }
    cy.get('div[class="run-button"]').within(()=>{
        cy.get('button').click({force: true})
    })
    if(delaySeconds>0){
      cy.get('[class*="spinner"').should('exist')
    }
    cy.wait('@api',{responseTimeout:1000*delaySeconds})
    if(message.length>0){
      cy.wait('@genreclassify',{responseTimeout:1000*delaySeconds}).then(xhr=>{
        cy.get('[class*="spinner"').should('not.exist')
          cy.wrap(xhr.response.statusCode).should('eq', status).then(()=>{
              cy.contains(message).should('exist')
          })
      })
    }else{
      cy.get('@api').its('response.body').should('eq','it worked!')
    }
      
  })  