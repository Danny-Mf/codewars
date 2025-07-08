function multiply(a, b) {
    if (a !== null && b !== null) {
        return a * b;
    }
    else if (a && !b) {
        return (Array.isArray(a))? a.map(num => num * 2): a*2;

    }
}
console.log(multiply(2,4)); // [4, 6, 8, 10]