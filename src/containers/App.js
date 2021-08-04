import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from '../components/LandingPage/LandingPage.js'

class App extends Component {
  render () {
    return (
          <div>
            <LandingPage />
          </div>
       
    )
  }
}

export default App;
