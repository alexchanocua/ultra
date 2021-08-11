import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap'
import signInImage from './signInImage.jpg'
import {Animated} from 'react-animated-css'

export default class SignIn extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }

    // listeners 
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://still-fjord-41724.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        
    }

    render() {
        const { onRouteChange } = this.props;
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
                                <Form.Control onChange={this.onEmailChange} type="email"  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.onPasswordChange} type="password"  />
                            </Form.Group>
                            <Button onClick={this.onSubmitSignIn} variant="light" type="button">
                                Submit
                            </Button>
                            <Button id="buttonLink"  onClick={() => onRouteChange('landingPage')}>Back to homepage</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
