import { MD_INPUT, HTML_OUTPUT, MD_TO_HTML } from "../constants/action-types";
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

export function mdToHtmlConvert(md) {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(md)

    return {
        type: MD_TO_HTML,
        payload: html
    }
}