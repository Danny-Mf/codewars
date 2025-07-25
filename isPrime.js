
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(2));    
console.log(isPrime(17));   
console.log(isPrime(18));   
console.log(isPrime(-5));   