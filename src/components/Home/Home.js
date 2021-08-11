import {Container, Row, Col} from 'react-bootstrap'
import homeImage from './homeImage.jpg'
import {Animated} from 'react-animated-css'

export default function Home({name, onRouteChange}) {
    name = name.charAt(0).toUpperCase() + name.slice(1); 
    return (
        <Container >
            <Row className="justify-content-md-center">
                <Col id='col'>
                    <Animated 
                        animationIn="fadeIn" 
                        animationInDuration={3000}
                        isVisible={true}
                        >
                    <img alt='logo' src={homeImage}/>
                    </Animated>
                    <Animated 
                        animationIn="fadeIn"
                        animationInDelay={750} 
                        isVisible={true}
                        >
                        <p>ultra</p>
                    </Animated>
                </Col>
            </Row>
            <Row>
            <p>{name}, thank you for registering. We are currently under development and will launch soon..</p>
            </Row>
        </Container>
    )
}