
Cypress.Commands.add('resultsTests',(text)=>{
  let nakdanResults=''
  cy.get('[class="token"]').each(($word)=>{
    nakdanResults=nakdanResults+$word.text()
      // cy.get($word).each($letter=>{
      //     nakdanResults=nakdanResults+$letter.text()
      // }).then(()=>{
      //     nakdanResults=nakdanResults+' ' 
      // })
  }).then(()=>{
      expect(nakdanResults).to.eq(text)
  }) 
})


Cypress.Commands.add('closeWelcomeWindow',()=>{
  cy.get('body').then(($body) => {
    if($body.find('a[class="welcome-close-link"]').length){
      cy.get('a[class="welcome-close-link"]').click({force: true})
    }
  })
})

Cypress.Commands.add('runNakdanPro',(text)=>{
  cy.get('textarea[placeholder="הזן טקסט כאן"]').type(text,{force: true})
  cy.get('div[class="run-button"]').within(()=>{
    cy.get('button').click({force: true})
  })
})

Cypress.Commands.add('nakdanProRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept( url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.closeWelcomeWindow()
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.runNakdanPro('משה קיבל תורה')

  if(delaySeconds>0){
    cy.get('[class*="spinner"]').should('exist')
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  }
      
})  