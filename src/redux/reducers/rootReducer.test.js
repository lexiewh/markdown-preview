import rootReducer from "."
import expect from 'expect'

describe('Root reducer', () => {
    it('should return initial state', () => {
        expect(rootReducer(undefined, {})).toEqual({ "html_output": "", "md_input": "" })
    })
})