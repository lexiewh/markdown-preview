describe('The home page', () => {
    before(() => {
        cy.visit('/')
    })

    it('renders App component', () => {
        cy.get('#app')
    })
})