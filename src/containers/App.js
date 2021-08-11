import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from '../components/LandingPage/LandingPage.js';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';

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
      }
    })
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
    const {name} = this.state.user;
    let page;
    switch(route) {
      case 'landingPage':
        page = <LandingPage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        break;
      case 'signin':
        page = <SignIn  onRouteChange={this.onRouteChange}/>
        break;
      case 'register':
        page = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        break;
      case 'home':
        page = <Home name={name} onRouteChange={this.onRouteChange}/>
        break;
      default:
        page = <LandingPage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
    }
    // route === 'signin'
    // ? page = <SignIn  onRouteChange={this.onRouteChange}/>
    // : route === 'register'
    //   ? page = <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    //   : page = <LandingPage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
    return (page
    )
  }
}

export default App;

// PREVIOUSE ROUTING IMPLEMENATION CORRECT?
// route === 'landingPage'
// ? <LandingPage isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
// : (
//   route === 'signin'
//   ? <SignIn  onRouteChange={this.onRouteChange}/>
//   : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
//   )
