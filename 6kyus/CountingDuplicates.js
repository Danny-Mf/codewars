//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text){
   const arr = text.split('')
   const c = (el) => arr.reduce((c,e) => c += e.toLowerCase() === el.toLowerCase()? 1: 0,0);
   const uniq= [...new Set(arr.map(e => e.toLowerCase()))];
   return uniq.reduce((count,el) => 
          count += c(el) > 1 ? 1 
          : 0, 0 );
}
console.log(duplicateCount("aabBcde"));