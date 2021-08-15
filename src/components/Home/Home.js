import {Container, Row, Col} from 'react-bootstrap'
import homeImage from './homeImage.jpg'
import homeImage2 from './homeImage2.jpg'
import homeImage3 from './homeImage3.jpg'
import {Animated} from 'react-animated-css'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
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
                    <img alt='logo' src={homeImage3}/>
                    </Animated>
                </Col>
            </Row>
            </Container>

            {/* Testing scroll feature with duplicate images */}
            <Animated 
            animationIn="fadeIn" 
            animationInDuration={2000}
            animationInDelay={750} 
            isVisible={true}
            >
            <Row>
            <p>{name}, thank you for registering. We are currently under development and will launch soon..</p>
            </Row>
            </Animated>

            <Container id='content' >
            <Row className="justify-content-md-center">
                <Col id='col'>
                    <Animated 
                        animationIn="fadeIn" 
                        animationInDuration={3000}
                        isVisible={true}
                        >
                    <img alt='logo' src={homeImage2}/>
                    </Animated>
                </Col>
            </Row>

            <Animated 
            animationIn="fadeIn" 
            animationInDuration={2000}
            animationInDelay={750} 
            isVisible={true}
            >
            <Row>
            <p>This is a test layout of how everything will look.</p>
            </Row>
            </Animated>
            
            </Container>

            <Animated 
            animationIn="fadeIn" 
            animationInDuration={2000}
            animationInDelay={750} 
            isVisible={true}
            >
            <Row>
            <p>{name}, thank you for registering. We are currently under development and will launch soon..</p>
            </Row>
            </Animated>

            <Container id='content' >
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

            <Animated 
            animationIn="fadeIn" 
            animationInDuration={2000}
            animationInDelay={750} 
            isVisible={true}
            >
            <Row>
            <p>This is a test layout of how everything will look.</p>
            </Row>
            </Animated>
            
            </Container>

        </div>

    )
}