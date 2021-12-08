import MdEditor from "./Editor";
import Preview from "./Preview"
import { Container, Row, Col, Button } from 'react-bootstrap'

function Playground() {
  return (
    <Container id="playground" data-cy='playground'>
      <Row className='playground-row'>
          <Col sm={6} className='editor-cell'>
            <MdEditor />
          </Col>
          <Col sm={6} className='preview-cell'>
            <Preview />
          </Col>
      </Row>
    </Container>
  );
}

export default Playground