import { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor'

function MdEditor() {
    const [code, setCode] = useState('')

    return(
        <div id='editor' data-cy='editor'>
            <CodeEditor
                value={code}
                language="md"
                onChange={(evn) => setCode(evn.target.value)}
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

export default MdEditor