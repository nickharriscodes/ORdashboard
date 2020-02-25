import React from 'react';
import './App.css';
import CasesGraph from './components/CasesGraph';

const allData = require('./data/SDsampledata.json');

export default class App extends React.Component {
  render() {
    return (
      <div className='cases-over-time'>
        <CasesGraph allData={allData}/>
        {/* <div>
          <button onClick={() => getCasesPerDay(allData)}>
            Click me
          </button>
        </div> */}
      </div>
    );
  }
}
