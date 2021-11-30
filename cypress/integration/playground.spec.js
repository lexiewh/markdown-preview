// includes the editor, preview, and convert button

describe('Playground Component', () => {
    before(() => {
        cy.visit('/')
    })

    it('should render Editor component', () => {
        cy.get('[data-cy=editor]').should('exist')
    })

    it('should render Preview component', () => {
        cy.get('[data-cy=preview]').should('exist')
    })

    it('should render Button component', () => {
        cy.get('[data-cy=btn-convert]').should('contain', 'Convert')
    })
})