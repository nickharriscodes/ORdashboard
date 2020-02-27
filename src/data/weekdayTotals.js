export default function getWeekdayTotals(arr) {
  //take in big arr of objects, return object with weekdays as keys, and average number of cases that day as value.

  let weekdaysAndCases = {}

  for(let i = 0; i <= arr.length -1; i++) {
    let date = new Date(arr[i].Date)
    let dayOfWk = date.getDay();
    
    if (weekdaysAndCases[dayOfWk]) {
      weekdaysAndCases[dayOfWk]++;
    } else {
      weekdaysAndCases[dayOfWk] = 1;
    }
  }

  return (weekdaysAndCases);
}
