function countLessThanN(n) {
    return n > 5 ? countLessThanN(n - 1) + 1 : 0;
}
console.log(countLessThanN(10));