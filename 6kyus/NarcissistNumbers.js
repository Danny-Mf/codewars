//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
  const str = String(value)
  return value === str.split('').reduce((sum,el) => sum += el**str.length,0 );
}
