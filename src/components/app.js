import React, { Component } from 'react';
import BirthdayForm from './birthdayForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>BirthdayCountdown</h1>
          <div className="header_skew">
            <div className="header_subskew">
              <BirthdayForm/>
            </div>  
          </div>
        </header>
      </div>
    );
  }
}
