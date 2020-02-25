import React from 'react';
import {Line} from 'react-chartjs-2';
import getCasesPerDay from '../data/sortData';

const CasesGraph = ({ allData }) => {
  
  const getXAxis = () => {
    return Object.keys(getCasesPerDay(allData));
  }
  
  const getYAxis = () => {
    console.log(allData)
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
      <Line
        data={state}
        options={{
          title:{
            display:true,
            text:'Case Volume Over Time',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  );
}

export default CasesGraph;
