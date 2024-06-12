
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './clients.css';
import { useTranslation } from 'react-i18next';

export function Clients() {
    const { t } = useTranslation();

    return (
        <Container fluid>
            <Row className="justify-content-md-center my-4">
                <Col style={{ textAlign: 'center', marginTop: '5px' }} md={10}>
                    <h1>{t('ourValuedClients')}</h1>
                    <p>{t('clientsDescription')}</p>
                </Col>
            </Row>

            <Row className="clients-row my-5">
                <Col md={2}></Col>
                <Col md={8}>
                    <h2>{t('clientsTitle')}</h2>
                    <p>{t('clientsSubtitle')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row className="clients-logos my-4">
                <Col md={2}></Col>
                <Col md={2}>
                    <Image src="image/client1_logo.webp" className="client-logo" />
                </Col>
                <Col md={2}>
                    <Image src="image/client2_logo.webp" className="client-logo" />
                </Col>
                <Col md={2}>
                    <Image src="image/client3_logo.webp" className="client-logo" />
                </Col>
                <Col md={2}>
                    <Image src="image/client4_logo.webp" className="client-logo" />
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="testimonial-row my-5">
                <Col md={2}></Col>
                <Col md={8}>
                    <h2>{t('whatClientsSay')}</h2>
                    <p>{t('testimonialsDescription')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row className="testimonial-row my-4">
                <Col md={2}></Col>
                <Col md={8} className="testimonial-col">
                    <blockquote className="testimonial">
                        {t('testimonial1')}
                        <footer>- {t('testimonial1Footer')}</footer>
                    </blockquote>
                    <blockquote className="testimonial">
                        {t('testimonial2')}
                        <footer>- {t('testimonial2Footer')}</footer>
                    </blockquote>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="case-studies-row my-5">
                <Col md={2}></Col>
                <Col md={8}>
                    <h2>{t('caseStudiesTitle')}</h2>
                    <p>{t('caseStudiesDescription')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>
            <Row className="case-studies-row my-4">
                <Col md={2}></Col>
                <Col md={4} className="case-study-col">
                    <h4>{t('caseStudy1Title')}</h4>
                    <p>{t('caseStudy1Description')}</p>
                </Col>
                <Col md={4} className="case-study-col">
                    <h4>{t('caseStudy2Title')}</h4>
                    <p>{t('caseStudy2Description')}</p>
                </Col>
                <Col md={2}></Col>
            </Row>

            <Row className="cta-row my-5">
                <Col md={2}></Col>
                <Col md={8} className="cta-col">
                    <h2>{t('ctaTitle')}</h2>
                    <p>{t('ctaDescription')}</p>
                    <button className="cta-button">{t('startFreeTrial')}</button>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    );
}
