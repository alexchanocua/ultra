import {Container, Row, Col} from 'react-bootstrap'
import homeImage5 from './homeImage5.jpg'
import homeImage4 from './homeImage4.jpg'
import homeImage from './homeImage.jpg'
import {Animated} from 'react-animated-css'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Footer from '../Footer/Footer'
import './Home.css'


export default function Home({name, onRouteChange}) {
    name = name.charAt(0).toUpperCase() + name.slice(1); 
    return (
        <div>
            <Navbar fixed='top' bg="light" variant='light'>
                <Container>
                <Navbar.Brand href="#home">ultra</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text >
                    {name + ' '}
                    <Button id='signOut' onClick={() => onRouteChange('landingPage')} 
                        variant="outline-dark" 
                        size='sm'
                        type="button">
                    Sign Out
                    </Button>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container id='content' >
            <Row className="justify-content-md-center">
                <Col id='col'>
                    <Animated 
                        animationIn="fadeIn" 
                        animationInDuration={3000}
                        isVisible={true}
                        >
                    <img alt='logo' src={homeImage4}/>
                    </Animated>
                </Col>
            </Row>

            <Row>
            <p>{name}, thank you for registering. We are currently under development and will launch soon..</p>
            </Row>

            {/* This is a test layout of the rest off the app */}
            <Row className="justify-content-md-center">
                <Col id='col'>
                    <Animated 
                        animationIn="fadeIn" 
                        animationInDuration={3000}
                        isVisible={true}
                        >
                    <img alt='logo' src={homeImage5}/>
                    </Animated>
                </Col>
            </Row>

            <Row>
            <p>This is a test layout. </p>
            </Row>

            <Row className="justify-content-md-center">
                <Col id='col'>
                    <Animated 
                        animationIn="fadeIn" 
                        animationInDuration={3000}
                        isVisible={true}
                        >
                    <img alt='logo' src={homeImage}/>
                    </Animated>
                </Col>
            </Row>

            <Row>
            <p>Image descriptions will be like this. </p>
            </Row>


            

            </Container>

            
            <Footer></Footer>

            
           
        </div>

    )
}