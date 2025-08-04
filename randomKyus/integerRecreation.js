function listSquared(m, n) {
  const result = [];
  const isSquare = (num) => Number.isInteger(Math.sqrt(num));
  for (let num = m; num <= n; num++) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        sum += i * i;
      }
    }

    if (isSquare(sum)) {
      result.push([num, sum]);
    }
  }

  return result;
}

console.log(listSquared(42, 250));