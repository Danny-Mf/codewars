//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
const getAges= (sum,difference) => 
     (Number.isInteger(sum)&& Number.isInteger(difference)
     && (sum>0 && difference>0)&&sum>=difference)
     ?[sum/2+ difference/2, sum/2-difference/2]
     : null;
console.log(getAges(36, -13))