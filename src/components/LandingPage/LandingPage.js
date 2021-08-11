import React from 'react';
import {Row, Col, Container } from 'react-bootstrap';
import oceanPic from './ocean.jpeg';
import './LandingPage.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Animated } from 'react-animated-css';


const LandingPage = ({ onRouteChange, isSignedIn }) => {
    return (
        <Animated 
        animationIn="fadeIn" 
        animationInDuration={3000}
        isVisible={true}
        >
            <Container >
                <Row className="justify-content-md-center">
                    <Col id='col'>
                        <img alt='logo' src={oceanPic}/>
                        <p>ultra</p>
                        <DropdownButton  variant="light" id="dropdown-basic-button" title="Enter">
                            <Dropdown.Item onClick={() => onRouteChange('signin')} >Login</Dropdown.Item>
                            <Dropdown.Item onClick={() => onRouteChange('register')}>Register</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </Animated>
    );
}

export default LandingPage;