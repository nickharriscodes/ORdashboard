// Average and median case duration by Service
// Note:case duration is measured by the difference 
// in minutes between ‘WheelsIn’ and ‘WheelsOut’ fields 
// 
// solution: bar chart. Each part is a Service with two bars — median and average

import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import getAverageDuration from '../data/averageDuration';
import getMedianDuration from '../data/medianDuration';

const CaseDuration = ({allData}) => {
  
  const getServices = (arr) => {
    let servicesObj = {};
    for(let i = 0; i <= arr.length -1; i++) {
      if (servicesObj[arr[i].Service]) {
        servicesObj[arr[i].Service]++;
      } else {
        servicesObj[arr[i].Service] = 1;
      }
    }
    return Object.keys(servicesObj);
  }

  const data = {
    labels: getServices(allData),
    datasets: [
      {
        label: 'Average Case Duration (hrs)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: getAverageDuration(allData)
      },
      {
        label: 'Median Case Duration (hrs)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: getMedianDuration(allData)
      }
    ]
  };  
  
  return (
    <div>
      <h2>Average and Median Case Duration by Service</h2>
      <HorizontalBar data={data} />
    </div>
  );
};

export default CaseDuration;
