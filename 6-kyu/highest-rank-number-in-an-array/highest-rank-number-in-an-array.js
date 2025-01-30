function highestRank(arr) {
  let highestNum = 0;
  let numCount = {};
​
  for (let num of arr) {
    numCount[num] = (numCount[num] || 0) + 1;
  }
​
  const maxValue = Math.max(...Object.values(numCount));
  const maxKeys = Object.keys(numCount).filter(key => numCount[key] === maxValue);
  
  return Math.max(...maxKeys.map(key => parseInt(key)));
}
​
const TEST_ARR = [10, 3, 2, 4, 3, 5, 1, 9, 4, 5, 3, 1, 2, 7, 10, 5, 2];
​
console.log(highestRank(TEST_ARR));
​