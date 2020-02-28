import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DelayTypeGraph from './components/DelayTypeGraph';
import CaseDuration from './components/CaseDuration';
import WeekdayTotals from './components/WeekdayTotals';
import Navbar from './components/Navbar';
import Home from './components/Home';

const allData = require('./data/SDsampledata.json');

export default class App extends React.Component {
  render() {
    console.log(allData)
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route 
              exact path="/case-volume"
              render={props => <WeekdayTotals {...props} allData={allData} />}
            />
            <Route 
              exact path="/delays"
              render={props => <DelayTypeGraph {...props} allData={allData} />}
            />
            <Route 
              exact path="/case-duration"
              render={props => <CaseDuration {...props} allData={allData} />}
            />
          </div>
        </div>
      </Router>
    );
  }
}
