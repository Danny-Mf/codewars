//http://codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  const word = str.split(" ");
  return word.map(w => (w !== "!" && w !== "?") ? w.slice(1)+ w[0]+ "ay": w).join(" "); 
}
console.log(pigIt('Pig latin is cool'));