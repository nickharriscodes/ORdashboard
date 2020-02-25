const allData = require('./SDsampledata.json');

function getDelayTypeFreq(arr) {
  
  let delayTypeFreq = {};

  for(let i = 0; i <= arr.length -1; i++) {
    
    let innerArr = arr[i]['Delay Type'].split("\n");
    
    for(let i = 0; i <= innerArr.length -1; i++) {
      if (delayTypeFreq[innerArr[i]]) {
        delayTypeFreq[innerArr[i]]++;
      } else {
        delayTypeFreq[innerArr[i]] = 1;
      }
    }
  }
  console.log(delayTypeFreq);
  return delayTypeFreq;
}

getDelayTypeFreq(allData);
