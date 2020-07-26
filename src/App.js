import React, {Component} from 'react';
import {Row, Col, Image, Button, Nav, Navbar, NavDropdown, Form, FormControl, Container, Jumbotron, Card, CardGroup, CardDeck, Carousel} from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.png';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.png';
import image9 from './images/image9.jpg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div>
          <Navbar  expand="lg" style={{backgroundColor:"#00CED1", height:"5rem"}}>
            <Navbar.Brand href="#home">Pharmacist Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div style={{backgroundColor:"#AFEEEE"}}>
          <Carousel fluid>
            <Carousel.Item>
              <Image className="" src={image1} height="400px" alt="First slide"></Image>
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <Image className="" src={image2} height="400px" alt="Second slide"></Image>
              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <Image className="" src={image3} height="400px" alt="Third slide"></Image>
              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="mt-5">
          <Container>
            <CardDeck>
              <Card style={{ width: '' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
        <div>
          <div className="mt-5">
            <h1> CURENT STUFF </h1>
          </div>
          <div className="mt-5">
            <Container>
              <Card style={{ width: '50%', margin:'auto'}}>
                <Card.Img variant="top" src={image5} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
        <div className="mt-5" style={{width:"", margin:"auto"}}>
          <Container>
            <div className="mt-5">
              <h1> OTHER STUFF </h1>
            </div>
            <div>
              <Card className="mt-3" style={{backgroundColor:"#00CED1"}}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image className="" src={image4}  alt="Second slide"></Image>
                    </Col>
                    <Col>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-3" style={{backgroundColor:"#00CED1"}}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image className="" src={image6}  alt="Second slide"></Image>
                    </Col>
                    <Col>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-3" style={{backgroundColor:"#00CED1"}}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image className="" src={image7}  alt="Second slide"></Image>
                    </Col>
                    <Col>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-3" style={{backgroundColor:"#00CED1"}}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image className="" src={image8}  alt="Second slide"></Image>
                    </Col>
                    <Col>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-3" style={{backgroundColor:"#00CED1"}}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Image className="" src={image9}  alt="Second slide"></Image>
                    </Col>
                    <Col>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
