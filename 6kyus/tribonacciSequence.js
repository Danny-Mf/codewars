//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
    let seq = [...signature, ... new Array(n -signature.length)];
    for(let i = 3; i < n; i++){
        seq[i] = seq[i-3]+seq[i-2] + seq[i-1]
    }
    return seq; 

    //return seq.map((e,idx) => 2 = idx > 2 ? seq[idx-3] + seq[idx-2] + seq[idx-1]: seq[idx]);
}
console.log(tribonacci([1,1,1], 10))