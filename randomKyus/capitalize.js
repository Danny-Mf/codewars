Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this
       .split(' ')
       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join(' ');
   }
  }
);

// Example usage:
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
// Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"