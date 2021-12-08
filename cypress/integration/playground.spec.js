// includes the editor, preview, and convert button
import initial_code from '../../src/utils/constants'

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

    it('should type in editor and display preview', () => {
        cy.get('[data-cy=editor').click().clear()
        cy.get('[data-cy=editor]').type('## Welcome to my React Markdown Previewer!')
        cy.get('[data-cy=editor]').should('have.value', '## Welcome to my React Markdown Previewer!')

        cy.get('[data-cy=preview]').find('h2').should('exist')
    })
})