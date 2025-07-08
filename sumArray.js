function sum (numbers) {
  return numbers? numbers.reduce((sum, number)=> sum+=number, 0): 0;
}
consol.log(sum([1, 2, 3, 4, 5])); // Output: 15