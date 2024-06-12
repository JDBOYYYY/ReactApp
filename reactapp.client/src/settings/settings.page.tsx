
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';
import './settings.css';

export const Settings = () => {
  const { t } = useTranslation();
  const { primaryColor } = useConfig();

  return (
    <Container fluid className="settings-page-container">
      <h2 className="my-4">{t('settings')}</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('profileSettings')}</h4>
              <Form>
                <Form.Group controlId="profileName" className="mb-3">
                  <Form.Label>{t('name')}</Form.Label>
                  <Form.Control type="text" placeholder={t('enterYourName')} />
                </Form.Group>
                <Form.Group controlId="profileEmail" className="mb-3">
                  <Form.Label>{t('email')}</Form.Label>
                  <Form.Control type="email" placeholder={t('enterYourEmail')} />
                </Form.Group>
                <Form.Group controlId="profilePhone" className="mb-3">
                  <Form.Label>{t('phone')}</Form.Label>
                  <Form.Control type="text" placeholder={t('enterYourPhoneNumber')} />
                </Form.Group>
                <Button variant={primaryColor} type="submit">
                  {t('saveProfile')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('accountSettings')}</h4>
              <Form>
                <Form.Group controlId="accountUsername" className="mb-3">
                  <Form.Label>{t('username')}</Form.Label>
                  <Form.Control type="text" placeholder={t('enterYourUsername')} />
                </Form.Group>
                <Form.Group controlId="accountPassword" className="mb-3">
                  <Form.Label>{t('password')}</Form.Label>
                  <Form.Control type="password" placeholder={t('enterYourPassword')} />
                </Form.Group>
                <Button variant={primaryColor} type="submit">
                  {t('saveAccount')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('notificationSettings')}</h4>
              <Form>
                <Form.Check
                  type="switch"
                  id="emailNotifications"
                  label={t('emailNotifications')}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="smsNotifications"
                  label={t('smsNotifications')}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="pushNotifications"
                  label={t('pushNotifications')}
                  className="mb-3"
                />
                <Button variant={primaryColor} type="submit">
                  {t('saveNotifications')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('privacySettings')}</h4>
              <Form>
                <Form.Check
                  type="switch"
                  id="profileVisibility"
                  label={t('profileVisibility')}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="searchVisibility"
                  label={t('searchVisibility')}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="dataSharing"
                  label={t('dataSharing')}
                  className="mb-3"
                />
                <Button variant={primaryColor} type="submit">
                  {t('savePrivacy')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('securitySettings')}</h4>
              <Form>
                <Form.Group controlId="securityQuestion" className="mb-3">
                  <Form.Label>{t('securityQuestion')}</Form.Label>
                  <Form.Control type="text" placeholder={t('enterYourSecurityQuestion')} />
                </Form.Group>
                <Form.Group controlId="securityAnswer" className="mb-3">
                  <Form.Label>{t('securityAnswer')}</Form.Label>
                  <Form.Control type="text" placeholder={t('enterYourSecurityAnswer')} />
                </Form.Group>
                <Form.Group controlId="twoFactorAuth" className="mb-3">
                  <Form.Label>{t('twoFactorAuth')}</Form.Label>
                  <Form.Check type="switch" id="enableTwoFactorAuth" label={t('enableTwoFactorAuth')} />
                </Form.Group>
                <Button variant={primaryColor} type="submit">
                  {t('saveSecurity')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('languageSettings')}</h4>
              <Form>
                <Form.Group controlId="languageSelect" className="mb-3">
                  <Form.Label>{t('preferredLanguage')}</Form.Label>
                  <Form.Control as="select">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Chinese</option>
                  </Form.Control>
                </Form.Group>
                <Button variant={primaryColor} type="submit">
                  {t('saveLanguage')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('subscriptionSettings')}</h4>
              <Form>
                <Form.Group controlId="subscriptionPlan" className="mb-3">
                  <Form.Label>{t('subscriptionPlan')}</Form.Label>
                  <Form.Control as="select">
                    <option>Free</option>
                    <option>Basic</option>
                    <option>Premium</option>
                    <option>Enterprise</option>
                  </Form.Control>
                </Form.Group>
                <Button variant={primaryColor} type="submit">
                  {t('saveSubscription')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('themeSettings')}</h4>
              <Form>
                <Form.Check
                  type="switch"
                  id="darkMode"
                  label={t('darkMode')}
                  className="mb-3"
                />
                <Form.Check
                  type="switch"
                  id="highContrastMode"
                  label={t('highContrastMode')}
                  className="mb-3"
                />
                <Button variant={primaryColor} type="submit">
                  {t('saveTheme')}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
