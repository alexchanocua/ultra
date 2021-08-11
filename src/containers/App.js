import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from '../components/LandingPage/LandingPage.js';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';

const initialState = {
  input: '',
  isSignedIn: false, 
  route: '',
  user: {
    email: '',
    password: '',
    name: '',
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      email: data.email,
      password: data.password,
      name: data.name
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  
  // inprogress

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
    } else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


  render () {
    const {route, isSignedIn} = this.state;
    return (
      route === 'landingPage'
      ? <LandingPage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      : (
        route === 'signin'
        ? <SignIn  onRouteChange={this.onRouteChange}/>
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
    )
  }
}

export default App;
