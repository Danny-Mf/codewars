
var divisibleBy=(numbers,divisor)=>numbers.filter(num=>num%divisor===0);
console.log(divisibleBy([1,2,4,6,8],2)); // [2, 4, 6, 8]