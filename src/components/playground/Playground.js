import MdEditor from "./Editor";
import Preview from "./Preview"
import { Container, Row, Col, Button } from 'react-bootstrap'

function Playground() {
  return (
    <Container id="playground" data-cy='playground'>
      <Row className='playground-row'>
          <Col md={5} className='editor-cell'>
            <MdEditor />
          </Col>
          <Col md={2} className='convert-container'>
            <div>
              <Button id='convert-btn'>Convert</Button>
            </div>
          </Col>
          <Col md={5} className='preview-cell'>
            <Preview />
          </Col>
      </Row>
    </Container>
  );
}

export default Playground