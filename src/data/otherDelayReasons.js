const allData = require('./SDsampledata.json');

function sortOtherReasons(arr) {
  // loop through by delayType, and when it's listed as "other", 
  // take the delay reason and put it in an object that keeps tally 
  // on number of occurences. Return that object. 
  let otherReasonsCounts = {};

  for(let i = 0; i <= arr.length -1; i++) {
    
    let innerArr = arr[i]['Delay Type'].split("\n");
    
    for(let i = 0; i <= innerArr.length -1; i++) {
      if (innerArr[i] === 'Other' && otherReasonsCounts[arr[i]['Delay Reason']]) {
        otherReasonsCounts[arr[i]['Delay Reason']]++;
      } else {
        otherReasonsCounts[arr[i]['Delay Reason']] = 1;
      }
    }
  }

  console.log(otherReasonsCounts)

}

sortOtherReasons(allData);