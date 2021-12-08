import rootReducer from "./index"
import expect from 'expect'
import { updateInput, updateOutput } from '../actions'
import { initial_code } from "../../utils/constants"

const initialState = { "html_output": "", "md_input": initial_code }

describe('Root reducer', () => {
    it('should return initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState)
    })

    it('should handle MD_INPUT', () => {
        expect(rootReducer(initialState, updateInput('sample input'))).toEqual({
            md_input: 'sample input',
            html_output: ''
        })
    })

    it('should handle HTML_OUTPUT', () => {
        expect(rootReducer(initialState, updateOutput('sample output'))).toEqual({
            md_input: initial_code,
            html_output: 'sample output'
        })
    })

    it('should overwrite existing value', () => {
        const existingState = { md_input: '', html_output: 'sample output' }
        expect(rootReducer(existingState, updateOutput('rewriting the output'))).toEqual({
            md_input: '',
            html_output: 'rewriting the output'
        })
    })
})