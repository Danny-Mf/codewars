//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
function uniqueInOrder(iterable){
  const arr = [...iterable]
  return arr.reduce((res,el,idx) => res = !(el=== arr[idx+1]) ? [...res,el]: [...res], []);
} 