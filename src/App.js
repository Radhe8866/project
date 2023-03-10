import Comp1 from './component/Comp1'
import Card1 from './component/Card1'
import Dog from './component/Dog'
import Adone from './component/Adone'
import Compp2 from './component/Compp2'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoLogoBuffer } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { TbShoppingCart } from 'react-icons/tb';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/comp1.css';
import './css/dog.css'
import './css/adone.css'
import './css/compp2.css'

function App() {
  return (
    <>
      <div className='header'>
        <Container>
          <Row>
            <Col className='main'><i><IoLogoBuffer /></i> Logoipsum</Col>

            <Col md="auto"><i className='img' ><BsClock /></i></Col>
            <Col xs lg="2" className='auto'>
              BOARDING HOURS
              <p> Mon - Sat: 7:00 am - 6:00 pm</p>
            </Col>
            <Col md="auto"><i className='img1' ><MdCall /></i></Col>
            <Col xs lg="2" className='auto'>
              CALL US
              <p>(555) Pup-Cares</p>
            </Col>
            <Col md="auto"></Col>
            <Col xs lg="3" className='auto'>
              <div className="button1">
                <Button variant="" className='color' size="lg">
                  MAKE AN APPOINMENT
                </Button>{' '}
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <NavDropdown title="Service" id="navbarScrollingDropdown">
                <NavDropdown.Item className='demo' href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll ">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link className='demo' href="#action1">Special</Nav.Link>
                  <Nav.Link className='demo' href="#action2">Facilities</Nav.Link>
                  <Nav.Link className='demo' href="#action2">Reviews</Nav.Link>

                  <NavDropdown className='demo' title="Shop" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3"></NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className='demo' href="#action2">About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Row xs="auto">
                    <Col>
                      <div className='top'>
                        <li><FiSearch /></li>
                      </div>
                    </Col>
                    <Col>
                      <div className='top'>
                        <li><TbShoppingCart /></li>
                      </div>
                    </Col>
                  </Row>

                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className='Hr'>
            <p>premier dog boarding, daycare & day spa</p>
          </div>
          <div className="button">
            <Button variant="" className='color' size="lg">
              MAKE AN APPOINMENT
            </Button>{' '}
          </div>
        </Container>
      </div>
      <section>
        <Comp1 />
      </section>
      <section>
        <Dog />
      </section>
      <section>
        <Card1 />
      </section>
      <section>
        <Adone />
      </section>
      <section>
        <Compp2 />
      </section>

    </>
  );
}

export default App;
