import React from "react"
import { Navbar, Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container id='header' data-cy='header'>
                <Row>
                    <Navbar.Brand href="/">Markdown Preview</Navbar.Brand>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header