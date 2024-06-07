import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';

const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    return (
        <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLanguage('pl')}>Polski</NavDropdown.Item>
        </NavDropdown>
    );
};

export default LangSwitcher;
