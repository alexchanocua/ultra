import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap'
import signInImage from './signInImage.jpg'
import {Animated} from 'react-animated-css'

export default function SignIn({onRouteChange}) {
    return (
        <Container >
            <Row className="justify-content-md-center">
                <Col id='col'>
                    <Animated 
                        animationIn="fadeIn" 
                        animationInDuration={3000}
                        isVisible={true}
                        >
                    <img alt='logo' src={signInImage}/>
                    </Animated>
                    <Animated 
                        animationIn="fadeIn"
                        animationInDelay={750} 
                        isVisible={true}
                        >
                        <p>ultra</p>
                    </Animated>
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                        <Button id="buttonLink"  onClick={() => onRouteChange('landingPage')}>Back to homepage</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
