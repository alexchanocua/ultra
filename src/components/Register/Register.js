import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap'
import registerImage from './registerImage.jpg'
import {Animated} from 'react-animated-css'

export default class Register extends React.Component {
    // constructor and state
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    // event listeners for users email/pasword/name/submission
    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onNameChange  = (event) => {
        this.setState({name: event.target.value})
    }
    
    // fetch call to ultra-api
    onSubmitRegister = () => {
        fetch('https://still-fjord-41724.herokuapp.com/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
            else    
                alert("Please enter valid credentials.");
        })
    }

    // render
    render() {
        return (
            
                <Container >
                        <Row className="justify-content-md-center">
                            <Col id='col'>
                                <Animated 
                                    animationIn="fadeIn" 
                                    animationInDuration={3000}
                                    isVisible={true}
                                    >
                                <img alt='logo' src={registerImage}/>
                                </Animated>
                                <Animated 
                                    animationIn="fadeIn"
                                    animationInDelay={750} 
                                    isVisible={true}
                                    >
                                    <p>ultra</p>
                                </Animated>
                                
                                <Form>
                                    <Form.Group className="mb-3" controlId="input">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={this.onNameChange} type="input"  />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onChange={this.onEmailChange} type="email"  />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={this.onPasswordChange} type="password"  />
                                    </Form.Group>
                                    <Button onClick={this.onSubmitRegister} variant="light" type="button">
                                        Submit
                                    </Button>
                                    <Button id="buttonLink"  onClick={() => this.props.onRouteChange('landingPage')}>Back to homepage</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
        )
    }
}
