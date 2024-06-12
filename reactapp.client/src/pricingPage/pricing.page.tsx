
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import ToggleButtons from '../../components/ToggleButtons';
import { useTranslation } from 'react-i18next';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container fluid>
      <Row className="justify-content-md-center my-4">
        <Col style={{textAlign:'center',marginTop:'5px'}} md={8}>
          <h1>{t('calculateSolution')}</h1>
          <p>{t('cloudSolutionDescription')}</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{textAlign:'center'}}>
        <Col md={4}>
          <h2>{t('putTogetherPackage')}</h2>

          <Row style={{marginTop:'5px'}}>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p>{t('numberOfEmployees')}</p>
              <Col xs lg="4">
                <MDBInput style={{ width: '100%' ,marginTop:'5px'}} id="typeNumber1" type="number" />
              </Col>
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p>{t('numberOfTerminals')}</p>
              <Col xs lg="4">
                <MDBInput style={{ width: '100%' ,marginTop:'5px'}} id="typeNumber2" type="number" />
              </Col>
            </Col>
          </Row>

        </Col>
        <Col md={4}>
          <Row>
            <h2>{t('overviewOfCosts')}</h2>
            <p>{t('displayCostsIncurred')}</p>
          </Row>
          <Row>
            <ToggleButtons/>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-md-center my-4">
        <Col></Col>
        <Col md={4}>
          <h4>{t('additionalOptions')}</h4>
          <Form>
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox1`}
                label={t('mobileApp')}
              />
            </div>
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox2`}
                label={t('dutyAndShiftPlanning')}
              />
            </div>  
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox3`}
                label={t('serviceAndProjectRecording')}
              />
            </div>  
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox4`}
                label={t('projectBilling')}
              />
            </div>  
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox5`}
                label={t('projectBudget')}
              />
            </div>  
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox6`}
                label={t('orderPlanning')}
              />
            </div>  
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox7`}
                label={t('costCenters')}
              />
            </div>  
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox8`}
                label={t('expenseManagement')}
              />
            </div>
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox9`}
                label={t('languages')}
              />
            </div>
            <div key={`checkbox`} className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={`checkbox10`}
                label={t('outlookIntegration')}
              />
            </div>            
          </Form>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h5>{t('annualCosts')}</h5>
                  <p>{t('forAllEmployees')}</p>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <h5>{`${t('eur')} 3500.00`}</h5>
                  <p>{t('totalPerYear')}</p>
                </Col>
              </Row>
              <hr style={{ borderColor: 'grey' }} /> {/* This is the grey line */}
              <Row>
                <Col>
                  <p>{t('basicPackage')}</p>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <p>{`${t('eur')} 3500.00`}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{marginTop:'40px'}}>
            <Card.Body>
              <Row>
                <Col>
                  <h5>{t('oneOffCosts')}</h5>
                  <p>{t('extraCost')}</p>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <h5>{`${t('eur')} 3500.00`}</h5>
                  <p>{t('totalPerYear')}</p>
                </Col>
              </Row>
              <hr style={{ borderColor: 'grey' }} /> {/* This is the grey line */}
              <Row>
                <Col>
                  <a>{t('connectionCosts')}</a>
                  <br/>
                  <a>{t('costEstimationTraining')}</a>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <a>{`${t('eur')} 500.00`}</a>
                  <br/>
                  <a>{`${t('eur')} 3500.00`}</a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      {/* Add more Rows and Cols as necessary to complete the layout */}
    </Container>
  );
};
