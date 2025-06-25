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