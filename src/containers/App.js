import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from '../components/LandingPage/LandingPage.js';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';

const initialState = {
  isSignedIn: false, 
  route: 'home'
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

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
      route === 'home'
      ? <LandingPage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      : (
        route === 'signin'
        ? <SignIn  onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange}/>
        )
    )
  }
}

export default App;
