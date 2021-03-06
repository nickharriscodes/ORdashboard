import React from 'react';
import {Line} from 'react-chartjs-2';
import getWeekdayTotals from '../data/weekdayTotals';
import CasesGraph from './CasesGraph'

const WeekdayTotals = ({ allData }) => {
  
  const getYAxis = () => {
    return Object.values(getWeekdayTotals(allData));
  }

  const state = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: 'Cases',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: getYAxis()
      }
    ]
  }
  
  return (
    <div className='cases-over-time'>
      <h2>
        Total Cases Per Weekday
      </h2>
      <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
      <div className='cases-over-time'>
        <CasesGraph allData={allData}/>
      </div>
    </div>
  );
}

export default WeekdayTotals;
