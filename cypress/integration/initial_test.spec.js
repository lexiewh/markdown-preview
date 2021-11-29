describe('My first test', () => {
    it('visits the kitchen sink', () => {
        cy.visit('https://example.cypress.io')
    })
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type')
    })
    it('clicks the link "type"', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
    })
    it('navigates to a new url when clicking on the link', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        // get an input, type into it, and then verify
        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
})