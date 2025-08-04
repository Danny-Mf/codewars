const reject= (array, predicate) =>{
    const a=[...array.filter(predicate)];
    const res=[];
    for(let elem of array){
        if(!a.includes(elem)) res.push(elem);
    }
    return res;

};
console.log(reject(['a', 'b', 3, 'd'], x => typeof x === 'number'));