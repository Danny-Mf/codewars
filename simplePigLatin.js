function pigIt(str) {
  return str
    .split(" ")
    .map(word =>
      /^[a-zA-Z]+$/.test(word)
        ? word.slice(1) + word[0] + "ay"
        : word
    )
    .join(" ");
}
console.log(pigIt('Pig latin is cool')); // Output: igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // Output: elloHay