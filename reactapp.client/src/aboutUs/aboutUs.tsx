import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './aboutUs.css';
import { useTranslation } from 'react-i18next';

export function AboutUs() {
    const { t } = useTranslation();

    return (
        <Container fluid>
            <Row className="justify-content-md-center my-4">
                <Col style={{ textAlign: 'center', marginTop: '5px' }} md={10}>
                    <h1>{t('aboutUsTitle')}</h1>
                    <p>{t('aboutUsDescription')}</p>
                </Col>
            </Row>

            <Row className="mission-row my-5">
                <Col md={2}></Col>
                <Col md={8}>
                    <h2>{t('ourMission')}</h2>
                    <p>{t('missionDescription')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="history-row my-5">
                <Col md={2}></Col>
                <Col md={8}>
                    <h2>{t('ourHistory')}</h2>
                    <p>{t('historyDescription')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="team-row my-5">
                <Col md={2}></Col>
                <Col md={8}>
                    <h2>{t('meetTheTeam')}</h2>
                    <p>{t('teamDescription')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row className="team-photos my-4">
                <Col md={2}></Col>
                <Col md={2}>
                    <Image src="image/team_member1.webp" className="team-photo" />
                    <p className="team-name">{t('alexJohnson')}</p>
                    <p className="team-role">{t('ceo')}</p>
                </Col>
                <Col md={2}>
                    <Image src="image/team_member2.webp" className="team-photo" />
                    <p className="team-name">{t('sarahWilliams')}</p>
                    <p className="team-role">{t('projectManager')}</p>
                </Col>
                <Col md={2}>
                    <Image src="image/team_member3.webp" className="team-photo" />
                    <p className="team-name">{t('davidBrown')}</p>
                    <p className="team-role">{t('leadDeveloper')}</p>
                </Col>
                <Col md={2}>
                    <Image src="image/team_member4.webp" className="team-photo" />
                    <p className="team-name">{t('emilyClark')}</p>
                    <p className="team-role">{t('designer')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    );
}
