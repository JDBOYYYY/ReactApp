import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';
import Footer from '../../components/footer';
import LangSwitcher from '../../components/LangSwitcher';
import { useTranslation } from 'react-i18next';

function LayoutShowcase() {
    const { t } = useTranslation();

    return (
        <>
            <Row>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="d-block">
                                <Image src="/image/logoWithoutBackrogund.png" className="logo-layout" alt={t('logoAltText')} />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/features" className="d-block">
                                    {t('features')}
                                </Nav.Link>
                                <Nav.Link as={Link} to="/pricing" className="d-block">
                                    {t('pricing')}
                                </Nav.Link>
                                <Nav.Link as={Link} to="/clients" className="d-block">
                                    {t('clients')}
                                </Nav.Link>
                            </Nav>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/aboutUs" className="d-block">
                                    {t('aboutUs')}
                                </Nav.Link>

                                <LangSwitcher />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>

            <div>
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
            <Row>
                <Footer />
            </Row>
        </>
    );
}

export default LayoutShowcase;
