import { Button, Col, Row } from 'react-bootstrap';
import './App.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

function App() {
    return (
        <>
            <Row style={{ backgroundColor: 'rgb(228, 230, 235)', width: '100%' }}>
                <Col></Col>
                <Col md={5} className='mainPageText' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1>Time tracking software TimeWise, features that inspire.</h1>
                    <h3>TimeWise's time tracking features and solutions simplify everyday work for you and your team by tailoring them to the specific needs of your organization.</h3>
                </Col>
                <Col md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Image src="/image/challenges.webp" />
                </Col>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col style={{margin: '50px',textAlign:'center'}}>
                    <h1>What is TimeWise for?</h1>
                    <h4>TimeWise makes everyday work easier for you and your team thanks to its smart functions.</h4>
                </Col>
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col md="auto">
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1' ,height:'400px'}}>
                            <Card.Body>
                                <Card.Title>Working time measurement</Card.Title>
                                <Card.Text>
                                    Time recording for work and absences with TimeWise software includes all functions that are necessary for 
                                    legal recording of working hours. When setting up, the different needs of small and large companies 
                                    are taken into account as required.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1' ,height:'400px'}}>
                            <Card.Body>
                                <Card.Title>Project time tracking</Card.Title>
                                <Card.Text>
                                    Our simple and flexible time recording for projects brings transparency and overview into the recorded project 
                                    hours and facilitates efficient cost control. Project time recording for service providers, consultants, 
                                    craftsmen and industrial companies.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1' ,height:'400px'}}>
                            <Card.Body>
                                <Card.Title>Duty and shift planning</Card.Title>
                                <Card.Text>
                                    Shift schedule and roster online. Plan the deployment of your employee teams 
                                    for the coming weeks and months for the required presence times and locations. 
                                    Transfer the planned times to the time recording. Employees always receive the latest operational 
                                    information
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1',height:'400px'}}>
                            <Card.Body>
                                <Card.Title>Order planning</Card.Title>
                                <Card.Text>
                                    The gardener, the carpenter, the plumber, the electrician, the cleaner, the painter, 
                                    the heating fitter or the bricklayer - they all work for the customer and must be planned 
                                    efficiently. TimeWise supports craft businesses in this process and combines order planning 
                                    
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1',height:'400px' }}>
                            <Card.Body>
                                <Card.Title>Time tracking smartphone</Card.Title>
                                <Card.Text>
                                    Modern time recording with the TimeWise mobile app. 
                                    Do everything with your smartphone such as time recording, duty scheduling, order planning, 
                                    expenses, etc.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1' ,height:'400px'}}>
                            <Card.Body>
                                <Card.Title>Integration and interfaces</Card.Title>
                                <Card.Text>
                                    Our modern system enables the easy exchange of information that is integrated into TimeWise 
                                    from third-party systems or read into other systems by TimeWise. This allows you to achieve 
                                    greater efficiency and secure data exchange.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>   
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1' ,height:'400px'}}>
                            <Card.Body>
                                <Card.Title>Time recording with tablet</Card.Title>
                                <Card.Text>
                                    The tablet can also be used as a simple clocking device to record employee attendance.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1',height:'400px' }}>
                            <Card.Body>
                                <Card.Title>Expenses always under control</Card.Title>
                                <Card.Text>
                                    Our expense management allows you to record expenses quickly and easily along with 
                                    daily working hours. Either by recording on the PC or on the smartphone.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem', margin: '20px', flex: '1',height:'400px' }}>
                            <Card.Body>
                                <Card.Title>Time clocks and terminals</Card.Title>
                                <Card.Text>
                                    With electronic working time recording with a stationary time clock, employees' 
                                    attendance times are simply recorded as they walk by.
                                </Card.Text>
                                
                                
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>    
                <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col style={{margin: '50px',textAlign:'center'}}>
                    <h2>Why Time Wise ?</h2>
                </Col>
                <Col></Col>
            </Row>      
            <Row>
                <Col></Col>
                <Col md="auto">
                    <Row>
                        <Card className='card-hover' style={{ width: '18rem' ,margin: '20px', flex: '1',height:'600px'}}>
                            <Card.Img variant="top" src="\image\mainPageCard1.svg" />
                            <Card.Body>
                                <Card.Title>Transparent & clear</Card.Title>
                                <Card.Text>
                                    The recorded working times are immediately visible to all parties and bring transparency to time recording. 
                                    Employees have access to their times and time balances at any time.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem',margin: '20px', flex: '1',height:'600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard2.svg" />
                            <Card.Body>
                                <Card.Title>Simple & flexible</Card.Title>
                                <Card.Text>
                                    The simplicity of use is important to us. 
                                    We transform individual requirements and extensive options into simple processes and views.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem',margin: '20px', flex: '1',height:'600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard3.svg" />
                            <Card.Body>
                                <Card.Title>Full cost control</Card.Title>
                                <Card.Text>
                                    We know simple and understandable usage fees and offer extensive and integrated support 
                                    to achieve sustainable customer satisfaction.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row> 
                        <Card className='card-hover' style={{ width: '18rem',margin: '20px', flex: '1',height:'600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard4.svg" />
                            <Card.Body>
                                <Card.Title>Quick implementation of time recording</Card.Title>
                                <Card.Text>
                                    Our application is not only simple and user-friendly, 
                                    but the clear structure also makes it easier to manage the system efficiently and introduce it quickly.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>  
                        <Card className='card-hover' style={{ width: '18rem',margin: '20px', flex: '1',height:'600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard5.svg" />
                            <Card.Body>
                                <Card.Title>Available online at any time</Card.Title>
                                <Card.Text>
                                    Our solution is in the cloud in Switzerland. 
                                    It can therefore be used from anywhere and supports today's digital and location-independent way of working.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card className='card-hover' style={{ width: '18rem',margin: '20px', flex: '1',height:'600px' }}>
                            <Card.Img variant="top" src="\image\mainPageCard6.svg" />
                            <Card.Body>
                                <Card.Title>Scalable for any company size</Card.Title>
                                <Card.Text>
                                    ClickTime is very simple and clear for small businesses or comprehensive with many additional 
                                    functions for companies with more complex requirements.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    </Col>    
                    <Col></Col>
            </Row>
            <Row className="justify-content-md-center my-4">
                <Col></Col>
                <Col style={{margin: '50px',textAlign:'center'}}>
                    <h2>Views Examples</h2>
                </Col>
                <Col></Col>
            </Row> 
            <Row>   
                <Col></Col>
                <Col md={8}>    
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{paddingLeft:'100px',paddingRight:'100px'}}/>
                            <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'0.8'}}>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{paddingLeft:'100px',paddingRight:'100px'}}/>
                            <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'0.8'}}>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{paddingLeft:'100px',paddingRight:'100px'}}/>
                            <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'0.8'}}>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src="\image\monthlyReport.png" fluid style={{paddingLeft:'100px',paddingRight:'100px'}} />
                            <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'0.8'}}>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default App;