import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { Button, Row } from 'react-bootstrap';

function LayoutShowcase() {
    return (
        <>
            <Row>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="d-block">
                                <Image src = "/image/logoWithoutBackrogund.png" className="logo-layout" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">
                                <Link to="/features" className="d-block">
                                    Features
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="">
                                <Link to="/pricing" className="d-block">
                                    Pricing
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="">
                                <Link to="/clients" className="d-block">
                                    Our Clients
                                </Link>
                            </Nav.Link>

                        </Nav> 
                        <Nav className="me-auto">
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <NavDropdown title="Language" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">German</NavDropdown.Item>
                            </NavDropdown>        
                                <Nav.Item className="ms-auto">
                                    <Link to="/login" className="d-block">
                                        <Button variant="primary" type="submit" >
                                            Log in
                                        </Button>
                                    </Link>
                                </Nav.Item>
                        </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>


            <div>
                <Container fluid>
                    <Outlet></Outlet>
                </Container>
            </div></>
    );
}

export default LayoutShowcase;