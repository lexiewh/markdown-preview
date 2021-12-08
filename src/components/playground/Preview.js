import { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateOutput } from '../../redux/actions'
import showdown from 'showdown'
import ReactHtmlParser from 'react-html-parser'

const mapStateToProps = state => {
    return {
        md_input: state.md_input,
        html_output: state.html_output
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateHtml: (event) => dispatch(updateOutput(event))
    }
}

function Preview({ md_input, html_output, updateHtml }) {
    useEffect(() => {
        const converter = new showdown.Converter()
        updateHtml(converter.makeHtml(md_input))
        console.log(typeof(html_output))
    })

    return (
        <div id='preview' data-cy='preview'>
            {ReactHtmlParser(html_output)}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)