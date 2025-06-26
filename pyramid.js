function towerBuilder(nFloors) {
  let pyramid = [];
  for (let i = 1; i <= nFloors; i++) {
    const stars = "*".repeat(2 * i - 1);
    const spaces = " ".repeat(nFloors - i);
    pyramid.push(spaces + stars + spaces);
  }
  return pyramid;
}

console.log(towerBuilder(3)); // ["  *  ", " *** ", "*****"]
