function findUnique(numbers) {
  const counts = {};
  for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
  }
  for (const num of numbers) {
    if (counts[num] === 1) return num;
  }
}

console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9 ]))