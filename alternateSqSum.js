function alternateSqSum(arr){
    return [...arr.map((num, index)=>(index+1) % 2===0? num*num:num)].reduce((sum, num)=>sum+num,0);
}
console.log(alternateSqSum([11, 12, 13, 14, 15])); 
