let puntuation = ['?','¿', '!', '¡', ',', '.'];
​
function pigIt(str){
  let separateStr = str.split(' ');
  let addStr = separateStr.map(word => {
    if (puntuation.includes(word)) {
      return word;
    } else {
      return word.slice(1) + word[0] + "ay";
    }
  });
  return addStr.join(' ');
}
​
const str = 'Pig latin is cool';
console.log(pigIt(str));
​
// Requirements
// Primera pasarla de ultimo
// Agregarle "ay"
// Mantener los signos de puntuación intactos