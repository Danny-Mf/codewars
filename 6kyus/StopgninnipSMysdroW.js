//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
const spinWords = string =>
        string.split(' ')
        .map(w => w.length >=5 
        ? w.split('').reverse().join('')
        : w)
        .join(' ');
console.log(spinWords('Stop gninnipS My sdroW!'));