import React, {Component} from 'react';
import Clock from './clock';
import './App.css';

class App extends Component {
  
  currDate = new Date().toLocaleDateString();
  render() {
    return (
      <div className = "App">
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;