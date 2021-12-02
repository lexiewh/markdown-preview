import React from "react"
import { Navbar, Container } from 'react-bootstrap'

function Footer() {
    return (
        <Navbar bg='light' expand='lg'>
            <Container id='footer' data-cy='footer'>
                <Navbar.Collapse className='justify-content-center'>
                    <Navbar.Text>
                        © 2021 - Developed by <a href='https://github.com/lexiewh'>Lexie White</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer