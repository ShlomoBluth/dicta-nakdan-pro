// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../../dicta-shared/index.js'



// Ignore only app errors known to be harmless; any other uncaught error fails the test,
// so real JavaScript crashes on the site are reported.
// (Before 2026-10 every error was ignored; a run across all dicta-* repos showed none occur.)
const IGNORED_APP_ERRORS = [
  /ResizeObserver loop (limit exceeded|completed with undelivered notifications)/,
]

Cypress.on('uncaught:exception', (err) => {
  if (IGNORED_APP_ERRORS.some((re) => re.test(err.message))) {
    return false
  }
})

Cypress.on('window:confirm', () => true);

// Alternatively you can use CommonJS syntax:
// require('./commands')
