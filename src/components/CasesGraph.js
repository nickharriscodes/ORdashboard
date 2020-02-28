import React from 'react';
import {Line} from 'react-chartjs-2';
import getCasesPerDay from '../data/casesPerDay';

const CasesGraph = ({ allData }) => {
  
  const getXAxis = () => {
    return Object.keys(getCasesPerDay(allData));
  }
  
  const getYAxis = () => {
    return Object.values(getCasesPerDay(allData));
  }

  const state = {
    labels: getXAxis(),
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
      <h2 className='case-volume-header'>
        Case Volume Over Time
      </h2>
      <div className="big-cases-line">
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
      </div>
    </div>
  );
}

export default CasesGraph;
