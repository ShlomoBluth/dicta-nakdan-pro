/// <reference types="cypress"/>

//run basic tests on nakdan run
const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
//sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })

            it('Modern nakdan',()=>{
                cy.closeWelcomeWindow()
                cy.get('button').contains('הגדרות ניקוד').click({force: true})
                cy.intercept('/api').as('NakdanProRun')
                cy.runNakdanPro('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
                cy.wait('@NakdanProRun')
                cy.resultsTests('משֶׁה קִבֵּל תּוֹרָה מִסִּינַי')
            })
        
        })
    
    })
})

