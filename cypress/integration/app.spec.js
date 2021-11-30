describe('App Component', () => {
    before(() => {
        cy.visit('/')
    })

    it('should render Header component', () => {
        cy.get('[data-cy=header]')
    })

    it('should render Playground component', () => {
        cy.get('[data-cy=playground]')
    })

    it('should render Footer component', () => {
        cy.get('[data-cy=footer]')
    })
})