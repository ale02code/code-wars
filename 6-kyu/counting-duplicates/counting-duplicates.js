function duplicateCount(text) {
  const newText = text.toLowerCase(); 
  const charCount = {};
  let countDuplicates = 0;
  
  for (let char of newText) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
​
  for (let key in charCount) {
    if (charCount[key] > 1) {
      countDuplicates++;
    }
  }
​
  return countDuplicates;
}
​
const TEST_TEXT = 'aabbcde';
console.log(duplicateCount(TEST_TEXT));
​