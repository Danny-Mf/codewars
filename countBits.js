function countBits(n) {
  let numberOfBits = 0;
  while (n > 0) {
    if (n % 2 === 1) numberOfBits += 1;
    n = Math.floor(n / 2);
  }
  return numberOfBits;
}

console.log(countBits(10)); //