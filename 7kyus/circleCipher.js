//https://www.codewars.com/kata/634d0723075de3f97a9eb604/train/javascript

//psuedo code
//enconde:
//decode using reverse encoding process

function encode(s) {
    const word = s.split('');
    return word.reduce((w,_,i) =>
         (word.length/2 >  i)
        ?  w += word[i] 
        + word[word.length-(1+i)]
        : w
        ,"");
}
function decode(s) {
    const word = s.split('');
    /* let a=0;
    return  word.reduce((w,l) => 
            w += 
            a<word.length
            ? word[0]
            : word[word.length-a]
            ,""
        ); */
    //word[0] + word[2] + word[4] + word[6];
    //return word.reduce((w,_,i) =>  w + ,"");
}
//console.log(decode("csordaew"));
console.log(encode("danny"));

//dyann
/* 
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"


 */