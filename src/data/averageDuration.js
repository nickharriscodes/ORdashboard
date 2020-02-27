// average duration by service 
// cycle through and check if the service for that particular 
// case is listed in the new obj. If not, assign an empty array,
// and if so, then take the difference between WI and WO
// and push it to the array assigned to service. 
// Then sum the array and divide by array.length. 

export default function getAverageDuration(arr) {
  let servicesAndTimes = {};
  let averagesArr = [];

  for(let i = 0; i <= arr.length -1; i++) {
    if (servicesAndTimes[arr[i].Service]) {
      let wheelsIn = new Date(arr[i].WheelsIn);
      let wheelsOut = new Date(arr[i].WheelsOut);
      let hoursPassed = ((wheelsOut.getTime() - wheelsIn.getTime()) / 1000 / 60 / 60).toFixed(1);
      servicesAndTimes[arr[i].Service].push(hoursPassed);
    } else {
      servicesAndTimes[arr[i].Service] = [];
      let wheelsIn = new Date(arr[i].WheelsIn);
      let wheelsOut = new Date(arr[i].WheelsOut);
      let hoursPassed = ((wheelsOut.getTime() - wheelsIn.getTime()) / 1000 / 60 / 60).toFixed(1);
      servicesAndTimes[arr[i].Service].push(hoursPassed);
    }
  }

  for(const item in servicesAndTimes) {
    let total = 0;
    let notNum = [];
    for(let i = 0; i <= servicesAndTimes[item].length -1; i++) {
      if (servicesAndTimes[item][i] === 'NaN') {
        notNum.push(servicesAndTimes[item][i]);
      } else {
        total = (parseFloat(servicesAndTimes[item][i])) + total;
      }
    }
    averagesArr.push(parseFloat(total / servicesAndTimes[item].length).toFixed(2));
  }
  
  return averagesArr;
}
