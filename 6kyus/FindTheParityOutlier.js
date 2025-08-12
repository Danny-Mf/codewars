//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers){
  const evenCount = integers.reduce((c, el) => c += el % 2 === 0 ? 1: 0,0);
  return evenCount > 1 ?
    integers.reduce((odd, el) => odd =  el % 2 !== 0 ? el: odd)
    : integers.reduce((ev,el) => ev = el % 2 === 0 ? el: ev);
}