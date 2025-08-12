//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
     const arr = String(n).split('')
     return arr.length > 1 
            ? digitalRoot(arr
            .reduce((sum, a) =>
            sum += 
            Number(a),0))
            : Number(arr);
}
console.log(digitalRoot(456));