describe('Footer Component', () => {
    before(() => {
        cy.visit('/')
    })

    it('should render copyright and footer div', () => {
        cy.get('[data-cy=footer]').contains('© 2021 - Developed by Lexie White').should('exist')
    })
})