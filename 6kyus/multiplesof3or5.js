function solution(number){
    return number > 0 ? 
        [... new Array(number).keys()]
        .reduce((sum,n) => sum +=  (n % 3 === 0 || n % 5 === 0 )? n: 0, 0)
        : 0;
} 
console.log(solution(undefined))