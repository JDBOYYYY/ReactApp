import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import ToggleButtons from '../../components/ToggleButtons'
import Form from 'react-bootstrap/Form';

export const Pricing: React.FC = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center my-4">
        <Col style={{textAlign:'center',marginTop:'5px'}} md={8}>
          <h1>Calculate your solution</h1>
          <p>As a cloud solution, you pay exactly for what you use. <br/> Put together your optimal solution and calculate the one-off and ongoing costs for the functions you want.</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{textAlign:'center'}}>
        <Col md={4}>
          <h2>Put together a package</h2>

          <Row style={{marginTop:'5px'}}>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p>Number of employees</p>
              <Col xs lg="4">
                <MDBInput style={{ width: '100%' ,marginTop:'5px'}} id="typeNumber1" type="number" />
              </Col>
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p>Number of terminals</p>
              <Col xs lg="4">
                <MDBInput style={{ width: '100%' ,marginTop:'5px'}} id="typeNumber2" type="number" />
              </Col>
            </Col>
          </Row>

        </Col>
        <Col md={4}>
          <Row>
            <h2>Overview of costs</h2>
            <p>Display costs incurred per year or month</p>
          </Row>
          <Row>
            <ToggleButtons/>
          </Row>
          

        </Col>
      </Row>

      <Row className="justify-content-md-center my-4">
      <Col></Col>
        <Col md={4}>
          <h4>Additional options</h4>
        <Form>
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Mobile app (Android / IOS) + 4 EUR`}
          />
        </div>
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Duty and shift planning + 5 EUR`}
          />
        </div>  
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Service and project recording + 3 EUR `}
          />
        </div>  
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Project billing + 4 EUR`}
          />
        </div>  
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Project budget + 5 EUR`}
          />
        </div>  
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Order planning + 4 EUR`}
          />
        </div>  
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Cost centers + 4 EUR`}
          />
        </div>  
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Expense management + 4 EUR`}
          />
        </div>

        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Languages FR / EN / IT + 4 EUR`}
          />
        </div>
        <div key={`checkbox`} className="mb-3">
          <Form.Check // prettier-ignore
              type={'checkbox'}
              id={`checkbox`}
              label={`Outlook integration + 4 EUR`}
          />
        </div>            
        </Form>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <h5>Annual costs</h5>
                  <p>for all employees</p>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <h5>EUR 3500.00</h5>
                  <p>Total per year</p>
                </Col>
              </Row>
              <hr style={{ borderColor: 'grey' }} /> {/* This is the grey line */}
              <Row>
                <Col>
                  <p>Basic package</p>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <p>EUR 3500.00</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={{marginTop:'40px'}}>
            <Card.Body>
              <Row>
                <Col>
                  <h5>One-off costs</h5>
                  <p>extra cost</p>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <h5>EUR 3500.00</h5>
                  <p>Total per year</p>
                </Col>
              </Row>
              <hr style={{ borderColor: 'grey' }} /> {/* This is the grey line */}
              <Row>
                <Col>
                  <a>Connection costs</a>
                  <br/>
                  <a>Cost estimation training, setting up system</a>
                </Col>
                <Col style={{textAlign:'right'}}>
                  <a>EUR 500.00</a>
                  <br/>
                  <a>EUR 3500.00</a>
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
