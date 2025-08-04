https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
var solution = function(firstArray, secondArray) {
  let sumSqr=0;
  let avg;
  for(let i=0; i< firstArray.length;i++){
    sumSqr+=(firstArray[i]-secondArray[i])**2;
  }
  return avg=sumSqr/firstArray.length;
}

console.log(solution([1,2,3],[4,5,6])); 