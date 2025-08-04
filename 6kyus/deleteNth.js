//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
//get occurence of every element in the array
//make a new array
//copy the elemnts only n times and don't exceed.
function deleteNth(arr,n){
    const count=(arr, el)=> arr.reduce((occ, cur, _) => occ+= el===cur? 1:0,0);
    return arr.reduce((newArr,el) => count(newArr,el)<n? [...newArr,el]: [...newArr], []);
}

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([12,39,19,39,39,19,12], 1));