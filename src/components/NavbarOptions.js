import React from 'react'
import { Container,Navbar,Offcanvas,Nav } from 'react-bootstrap'

export default function NavbarOptions() {
    return (
        <div>
            <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">QR code Options</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">QR code Options</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">QRcode Generator</Nav.Link>
          <Nav.Link href="/scanner">QRcode Scanner</Nav.Link>
          </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}
