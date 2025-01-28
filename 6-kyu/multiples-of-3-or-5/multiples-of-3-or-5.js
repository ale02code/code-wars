function solution(number){
  const resultArr = [];
  
  for (let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      resultArr.push(i);
    }
  }
  
  let response = resultArr.reduce((num, acc) => num + acc, 0);
  
  return response;
}
​
console.log(solution(10));