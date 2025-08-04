//https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript
function rotate(array, n) {
    const k = array.length;
    let N=n;
    while(n>n%k){
        n%=k;
    }
    return N>=0? [...array.slice(k-n),...array.slice(0,k-n)]:[...array.slice(-n),...array.slice(0,-n)];
    
}
console.log(rotate([1, 2, 3, 4, 5], -3));