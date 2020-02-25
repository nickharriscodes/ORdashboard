export default function getCasesPerDay(arr) {
  
  let casesPerDay = {};

  for(let i = 0; i <= arr.length -1; i++) {
    if (casesPerDay[arr[i].Created]) {
      casesPerDay[arr[i].Created]++;
    } else {
      casesPerDay[arr[i].Created] = 1;
    }
  }

  return casesPerDay
}
