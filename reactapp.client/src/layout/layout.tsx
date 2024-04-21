import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

function Layout() {
    return (
        <><Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Link to="/timeRecording" className="d-block">
                        <Image src = "/image/logoWithoutBackrogund.png" className="logo-layout" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                        <Link to="/timeRecording" className="d-block">Time Recording</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/myTeam" className="d-block">My Team</Link> 
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/settings" className="d-block">Settings</Link>
                        </Nav.Link>
                        <NavDropdown title="Reports" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <Link to="/monthlyReport" className="d-block">Monthly Report</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/yearReport" className="d-block">Year Report</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar><div>
                <Container fluid>
                    <Outlet></Outlet>
                </Container>
            </div></>
    );
}

export default Layout;