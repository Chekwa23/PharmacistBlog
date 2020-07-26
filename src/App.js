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
          <Carousel>
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
              <Card style={{ width: '18rem' }}>
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
              <Card style={{ width: '18rem' }}>
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
              <Card style={{ width: '18rem' }}>
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
              <Card style={{ width: '30rem', margin:'auto'}}>
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
        <div className="mt-5" style={{width:"50rem", margin:"auto"}}>
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
          {/* <div>
            <Container style={{backgroundColor:'#f7f7f7', position:'absolute', marginTop:'2124px', marginLeft:'0px', height:'380px', width:'1152px'}} fluid>
              <p style={{position:'absolute', marginTop:'79px', marginLeft:'139px', fontWeight:'bold', color:'#FB1242', fontSize:'24px'}}>#AboutTime</p>
              <p style={{position:'absolute', marginTop:'134px', marginLeft:'139px', fontWeight:'normal', color:'#4F4F4F', fontSize:'18px', width:'466px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus spien nam vulputate aenean commodo, eget diam. Maecenas cras eget felis aliquet quam vitae.</p>
              <div style={{position:'absolute', marginLeft:'620px', marginTop:'84px', width:'180px'}}>
                <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                  <li style={{color:'#333333', fontSize:'18px'}}>Our Restaurants</li>
                  <li>Chicken Republic</li>
                  <li>Mr Biggs</li>
                  <li>KFC Chicken</li>
                  <li>Magrellos</li>
                  <li>Bernadines</li>
                </ul>
              </div>
              <div style={{position:'absolute', marginLeft:'810px', marginTop:'84px', width:'240px'}}>
                <ul style={{listStyle:'none', fontWeight:'600', color:'#828282', fontSize:'14px'}}>
                  <li style={{color:'#333333', fontSize:'18px'}}>Get to know our Team</li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Akana David</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Charles Cookey</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Ikechukwu Imala</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Dwight Ojukwu</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Lucas Chekwa</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Onyeukwu Samuel</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Eniola Olaiwole</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Yisau Sammad</Link></li>
                  <li><Link className="topbar" style={{color:'#828282', textDecoration:'none'}} to={{pathname:'./AboutUs', state:{}}}>Okemati Lanre</Link></li>
                </ul>
              </div>
            </Container>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
