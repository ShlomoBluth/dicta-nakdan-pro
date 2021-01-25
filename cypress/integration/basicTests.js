/// <reference types="cypress"/>

//run basic tests on nakdan run

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://nakdanpro.dicta.org.il/')
      })
    
    it('Modern nakdan',()=>{
        cy.closeWelcomeWindow()
        cy.get('button').contains('הגדרות ניקוד').click()
        cy.get('label').contains('השמט דגשים שאינם נשמעים').siblings('input').click({force: true})
        cy.runNakdanPro('משה קיבל תורה מסיני')
        cy.resultsTests('מֹשֶׁה קִ⁠בֵּל תוֹרָה מִסִינַי')
    })

})