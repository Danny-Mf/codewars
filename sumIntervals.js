function sumIntervals(intervals) {
    if (!Array.isArray(intervals) || intervals.length === 0) return 0;
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = intervals.reduce((acc, curr) => {
        if (!acc.length || acc[acc.length - 1][1] < curr[0]) {
            acc.push(curr);
        } else {
            acc[acc.length - 1][1] = Math.max(acc[acc.length - 1][1], curr[1]);
        }
        return acc;
    }, []);
    return merged.reduce((sum, [start, end]) => sum + (end - start), 0);
}
console.log(sumIntervals([[1, 5], [6, 10], [2, 3]]));