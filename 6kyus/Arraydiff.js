//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
const arrayDiff=(a, b) => a.filter(el => !b.includes(el));
console.log(arrayDiff([1,2,3,4,4,56,7,8,8,], [1,2,8,4]));
