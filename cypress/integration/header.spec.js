describe('Header Component', () => {
    before(() => {
        cy.visit('/')
    })

    it('should render title and header div', () => {
        cy.get('[data-cy=header]').should('exist')
        cy.get('[data-cy=title]').should('exist')
    })
})