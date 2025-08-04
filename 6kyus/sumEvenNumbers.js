function sumEvenNumbers(input) {
   let sum = 0;
   input.forEach(function(element){
       if (element % 2 === 0) {
           sum += element;
       }
   });
   return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); 


function sumEven(input) {
    let b=0;
    input.reduce((b, a) => {
   if (a % 2 === 0)  b += a;
   });
   return b;
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));