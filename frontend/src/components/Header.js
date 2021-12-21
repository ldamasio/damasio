import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'

function Header() {
    return (
        <header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
			  <Container>
			    <Navbar.Brand href="#home">
                    <img height="60px" src="https://www.leandrodamasio.com.br/static/ldamasio-logo.png" alt="Leandro Damasio" />
                </Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="me-auto">
			        <Nav.Link href="/blog">Blog</Nav.Link>
			        <Nav.Link href="/cursos">Cursos</Nav.Link>
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
        </header>
    )
}

export default Header
