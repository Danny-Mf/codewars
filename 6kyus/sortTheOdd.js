//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
    const odd = array.filter(a => a % 2 !== 0).sort((a, b) => a - b);
    return array.map(el => el % 2 ? odd.shift() : el);
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))