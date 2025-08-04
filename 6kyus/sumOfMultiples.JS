function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  let sumOfMultiples = 0;
  for (let i = n; i < m; i += n) {
    sumOfMultiples += i;
  }
  return sumOfMultiples;
}

console.log(sumMul(2, 9));    // 20
console.log(sumMul(4, -7));