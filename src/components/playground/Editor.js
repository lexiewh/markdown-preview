import { connect } from 'react-redux';
import CodeEditor from '@uiw/react-textarea-code-editor'
import { updateInput, mdToHtmlConvert } from '../../redux/actions';

const mapStateToProps = state => {
    return {
        md_input: state.md_input
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCode: (event) => dispatch(updateInput(event)),
        convertMd: (event) => dispatch(mdToHtmlConvert(event))
    }
}

function MdEditor({ md_input, updateCode, convertMd }) {
    const updateAndConvert = event => {
        updateCode(event)
        convertMd(event)
    }

    return(
        <div id='editor' data-cy='editor'>
            <CodeEditor
                value={md_input}
                language="md"
                onChange={(evn) => updateAndConvert(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MdEditor)