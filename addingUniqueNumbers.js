function uniqueSum(lst) {
  if (!lst || lst.length === 0) return null;
  const uniqueSet = new Set(lst);
  let sum = 0;
  for (let num of uniqueSet) {
    sum += num;
  }
  return sum;
}
console.log(uniqueSum([1, 2, 3, 3, 4, 4, 5]));
console.log(uniqueSum([])); 