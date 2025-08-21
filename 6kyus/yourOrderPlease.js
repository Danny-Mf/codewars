//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words){
  const arr = [];
  const wordsArray = words.split(' ');
  for(let word of words){
    for(let letter of word ){
       if(letter >= '0' && letter <= '9') arr.push(Number(letter));
       continue;
    }
  }
  console.log(arr);
  const sorted = arr.filter(el => el !== 0).sort((a,b) => a-b);
  return sorted.map(num => wordsArray.find(word => word.includes(num))).join(' ');
  
}
console.log(order('is2 Thi1s T4est 3a'));