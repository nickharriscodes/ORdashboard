export default function getMedianDuration(arr) {
  let servicesAndTimes = {};

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

  let servicesAndMedians = {};

  for(const item in servicesAndTimes) {
    let median = 0;
    let durationArrLen = servicesAndTimes[item].length
    servicesAndTimes[item].sort();
  
    if (durationArrLen % 2 === 0) {
      median = (parseFloat(servicesAndTimes[item][durationArrLen / 2 - 1]) + parseFloat(servicesAndTimes[item][durationArrLen / 2])) / 2;
      servicesAndMedians[item] = median.toFixed(2);
    } else {
      median = parseFloat(servicesAndTimes[item][(durationArrLen - 1) / 2]);
      servicesAndMedians[item] = median.toFixed(2);
    }

  }
  return Object.values(servicesAndMedians);
}
