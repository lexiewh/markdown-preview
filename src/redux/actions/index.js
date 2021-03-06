import { MD_INPUT, HTML_OUTPUT } from "../constants/action-types";
import showdown from 'showdown'

export function updateInput(value) {
    return {
        type: MD_INPUT,
        payload: value
    }
}

export function updateOutput(value) {
    return {
        type: HTML_OUTPUT,
        payload: value
    }
}