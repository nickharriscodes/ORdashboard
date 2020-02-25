import React from 'react';
import './App.css';
import CasesGraph from './components/CasesGraph';

const allData = require('./data/SDsampledata.json');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>OR Data Dashboard</h1>
        <div className='cases-over-time'>
          <CasesGraph allData={allData}/>
        </div>
      </div>
    );
  }
}
