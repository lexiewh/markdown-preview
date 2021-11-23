import { MD_INPUT, HTML_OUTPUT } from "../constants/action-types";

const initialState = {
    md_input: '',
    html_output: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case MD_INPUT:
            return {
                ...state,
                md_input: action.payload
            }
        case HTML_OUTPUT:
            return {
                ...state,
                html_output: action.payload
            }
        default:
            return state
    }
}

export default rootReducer