import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        md_input: state.md_input
    }
}

function Preview({ md_input }) {
    return (
        <div id='preview' data-cy='preview'>
            <p>{md_input}</p>
        </div>
    )
}

export default connect(mapStateToProps)(Preview)