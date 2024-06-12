
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './features.css'; // Make sure this CSS file is imported
import { useTranslation } from 'react-i18next';

export function Features() {
  const { t } = useTranslation();

  return (
    <Container fluid>
      {/* Header Section */}
      <Row className="justify-content-md-center my-4">
        <Col style={{ textAlign: 'center', marginTop: '5px' }} md={10}>
          <h1>{t('featuresHeader')}</h1>
          <p>{t('featuresDescription')}</p>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4} className="image-col">
          <Image src="/image/challenges.webp" className="feature-image" />
        </Col>
        <Col md={4}>
          <h2>{t('efficientTaskManagement')}</h2>
          <p>{t('efficientTaskManagementDescription')}</p>
          <ul>
            <li>{t('efficientTaskManagementBullet1')}</li>
            <li>{t('efficientTaskManagementBullet2')}</li>
            <li>{t('efficientTaskManagementBullet3')}</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4}>
          <h2>{t('detailedPerformanceAnalytics')}</h2>
          <p>{t('detailedPerformanceAnalyticsDescription')}</p>
          <ul>
            <li>{t('detailedPerformanceAnalyticsBullet1')}</li>
            <li>{t('detailedPerformanceAnalyticsBullet2')}</li>
            <li>{t('detailedPerformanceAnalyticsBullet3')}</li>
          </ul>
        </Col>
        <Col md={4} className="image-col">
          <Image src="image/DetailedPerformanceAnalitics.webp" className="feature-image" />
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4} className="image-col">
          <Image src="image/EffitientTaskMenagment.webp" className="feature-image" />
        </Col>
        <Col md={4}>
          <h2>{t('seamlessIntegrations')}</h2>
          <p>{t('seamlessIntegrationsDescription')}</p>
          <ul>
            <li>{t('seamlessIntegrationsBullet1')}</li>
            <li>{t('seamlessIntegrationsBullet2')}</li>
            <li>{t('seamlessIntegrationsBullet3')}</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4}>
          <h2>{t('advancedTimeTracking')}</h2>
          <p>{t('advancedTimeTrackingDescription')}</p>
          <ul>
            <li>{t('advancedTimeTrackingBullet1')}</li>
            <li>{t('advancedTimeTrackingBullet2')}</li>
            <li>{t('advancedTimeTrackingBullet3')}</li>
          </ul>
        </Col>
        <Col md={4} className="image-col">
          <Image src="/image/Advanced.webp" className="feature-image" />
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="feature-row my-4">
        <Col md={2}></Col>
        <Col md={4} className="image-col">
          <Image src="image/Security.webp" className="feature-image" />
        </Col>
        <Col md={4}>
          <h2>{t('robustSecurityFeatures')}</h2>
          <p>{t('robustSecurityFeaturesDescription')}</p>
          <ul>
            <li>{t('robustSecurityFeaturesBullet1')}</li>
            <li>{t('robustSecurityFeaturesBullet2')}</li>
            <li>{t('robustSecurityFeaturesBullet3')}</li>
          </ul>
        </Col>
        <Col md={2}></Col>
      </Row>

      {/* Additional Content */}
      {/* Testimonials Section */}
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

      {/* FAQs Section */}
      <Row className="faq-row my-5">
        <Col md={2}></Col>
        <Col md={8}>
          <h2>{t('frequentlyAskedQuestions')}</h2>
          <p>{t('faqsDescription')}</p>
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row className="faq-row my-4">
        <Col md={2}></Col>
        <Col md={8}>
          <div className="faq">
            <h4>{t('faq1Title')}</h4>
            <p>{t('faq1Description')}</p>
          </div>
          <div className="faq">
            <h4>{t('faq2Title')}</h4>
            <p>{t('faq2Description')}</p>
          </div>
          <div className="faq">
            <h4>{t('faq3Title')}</h4>
            <p>{t('faq3Description')}</p>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>

      {/* Call-to-Action Section */}
      <Row className="cta-row my-5">
        <Col md={2}></Col>
        <Col md={8} className="cta-col">
          <h2>{t('ctaHeader')}</h2>
          <p>{t('ctaDescription')}</p>
          <button className="cta-button">{t('startFreeTrial')}</button>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}
