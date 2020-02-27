import React from 'react';
import './App.css';
import CasesGraph from './components/CasesGraph';
import DelayTypeGraph from './components/DelayTypeGraph';
import CaseDuration from './components/CaseDuration';

const allData = require('./data/SDsampledata.json');

export default class App extends React.Component {
  render() {
    console.log(allData)
    return (
      <div>
        <h1>OR Data Dashboard</h1>
        <div className='cases-over-time'>
          <CasesGraph allData={allData}/>
        </div>
        <div className='delay-type-graph'>
          <DelayTypeGraph allData={allData}/>
        </div>
        <div className='duration-graph'>
          <CaseDuration allData={allData}/>
        </div>
      </div>
    );
  }
}
