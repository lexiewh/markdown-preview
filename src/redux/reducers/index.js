import { MD_INPUT, HTML_OUTPUT, MD_TO_HTML } from "../constants/action-types";
import { initial_code } from "../../utils/constants";

const initialState = {
    md_input: initial_code,
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
        case MD_TO_HTML:
            return {
                ...state,
                html_output: action.payload
            }
        default:
            return state
    }
}

export default rootReducer