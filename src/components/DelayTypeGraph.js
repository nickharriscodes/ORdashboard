// donut graph? 
// 
// will have to loop through and make an array/object of each delay type
// to see how many there are
// this will show most common types of delays... but also want to show data that this is a subset of.
// how many cases out of all them are actually experiencing delays of some kind? 

import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import getDelayTypeFreq from '../data/delayTypeFreq'

const DelayTypeGraph = ({allData}) => {
  
  const totalDelays = (arr) => {
    let delayedCases = 0;

    for(let i = 0; i <= arr.length -1; i++) {
      if (arr[i]['Delay Type'].split("").length > 0 ) {
        delayedCases++;
      }
    }
    return delayedCases;
  }

  const getPercent = () => {
    return Math.floor((totalDelays(allData) / allData.length) * 100);
  }
  
  const getLabels = (arr) => {
    const labelArr = Object.keys(getDelayTypeFreq(arr));
    labelArr.shift();
    labelArr.pop();
    return labelArr;
  }
  
  const getNums = (arr) => {
    const numArr = Object.values(getDelayTypeFreq(arr));
    numArr.shift();
    numArr.pop();
    return numArr;
  }
  
  const data = {
    labels: getLabels(allData),
    datasets: [{
      data: getNums(allData),
      backgroundColor: [
      '#AF81C9',
      '#F89A7E',
      '#F2CA85',
      '#54D1F1',
      '#7C71AD',
      '#445569'
      ],
      hoverBackgroundColor: [
        '#AF81C9',
        '#F89A7E',
        '#F2CA85',
        '#54D1F1',
        '#7C71AD',
        '#445569'
      ]
    }]
  };

  return (
    <div>
      <h2>
        Delay Type Frequency
      </h2>
      <p>Out of {allData.length} total cases, {totalDelays(allData)}, or {getPercent()} percent
         have experienced delays of some kind.
      </p>
      <Doughnut data={data} />
    </div>
  );
};

export default DelayTypeGraph;
