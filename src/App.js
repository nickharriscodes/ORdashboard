import React from 'react';
import './App.css';
import CasesGraph from './components/CasesGraph';
import DelayTypeGraph from './components/DelayTypeGraph';

const allData = require('./data/SDsampledata.json');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>OR Data Dashboard</h1>
        <div className='cases-over-time'>
          <CasesGraph allData={allData}/>
        </div>
        <div className='delay-type-graph'>
          <DelayTypeGraph allData={allData}/>
        </div>
      </div>
    );
  }
}
