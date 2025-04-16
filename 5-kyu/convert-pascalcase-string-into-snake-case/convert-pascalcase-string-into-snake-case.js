function toUnderscore(string) {
  let stringConfirm = string.toString();
  let res = "";
    for (let i = 0; i < stringConfirm.length; i++) {
      const char = stringConfirm[i];
      
      const isMayus = char === char.toUpperCase();
      const firstLetter = i !== 0;
      const isNumber = isNaN(char);
      
      if (isMayus && firstLetter && isNumber) {
        res += "_" + char.toLowerCase();
      } else {
        res += char.toLowerCase();
      }
    }
    return res;
}
​
const str = 5;
console.log(toUnderscore(str));