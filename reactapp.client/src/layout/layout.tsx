import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';
import LangSwitcher from '../../components/LangSwitcher';

function Layout() {
  const { t } = useTranslation();
  const { logoUrl } = useConfig();
  const { client } = useParams<{ client: string }>();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to={`/${client}/timeRecording`} className="d-block">
              <Image src={logoUrl} className="logo-layout" alt={t('logoAltText')} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={`/${client}/timeRecording`} className="d-block nav-link-custom">
                {t('timeRecording')}
              </Nav.Link>
              <Nav.Link as={Link} to={`/${client}/myTeam`} className="d-block nav-link-custom">
                {t('myTeam')}
              </Nav.Link>
              <Nav.Link as={Link} to={`/${client}/settings`} className="d-block nav-link-custom">
                {t('settings')}
              </Nav.Link>
              <NavDropdown title={t('reports')} id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={`/${client}/monthlyReport`} className="d-block">
                  {t('monthlyReport')}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/${client}/yearReport`} className="d-block">
                  {t('yearReport')}
                </NavDropdown.Item>
              </NavDropdown>
              <LangSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default Layout;
