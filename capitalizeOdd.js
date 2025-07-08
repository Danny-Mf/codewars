function capitalizeOdd(str){
    for(let i=0; i<str.length; i++){
        str = str.substring(0, i) +
              (i % 2 === 0 ? str[i].toUpperCase() : str[i]) +
              str.substring(i + 1);
    }  
    return str;
}
console.log(capitalizeOdd("hello da"));