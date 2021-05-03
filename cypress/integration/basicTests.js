/// <reference types="cypress"/>

//run basic tests on nakdan run
let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {


    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('')
        })
        
        it('Modern nakdan',()=>{
            cy.closeWelcomeWindow()
            cy.get('button').contains('הגדרות ניקוד').click({force: true})
            cy.get('label').contains('השמט דגשים שאינם נשמעים').siblings('input').click({force: true})
            cy.runNakdanPro('משה קיבל תורה מסיני')
            cy.resultsTests('מֹשֶׁה קִבֵּל תוֹרָה מִסִינַי')
        })
    
    })
})

