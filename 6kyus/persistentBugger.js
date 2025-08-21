//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
  let count = 0;

  while (num >= 10) {
    num = String(num)
      .split('')
      .reduce((prod, el) => prod * Number(el), 1);
    count++;
  }

  return count;
}
console.log(persistence(25))