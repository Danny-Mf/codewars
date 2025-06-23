function solve(arr) {
    const set = new Set(arr);
    for (let num of arr) {
        if (!set.has(-num)) {
            return num;
        }
    }
}
console.log(solve([1, -1, 2, -2, 3])); // Output: 3