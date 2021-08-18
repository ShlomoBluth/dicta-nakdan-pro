/// <reference types="cypress"/>

//run basic tests on nakdan run
let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {


    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
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

