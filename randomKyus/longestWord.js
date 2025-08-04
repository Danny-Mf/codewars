function longest(str){
    return str.split(' ').filter((l, e)=> l.length>e.length? l: l=e);
}

console.log(longest('Many functions are provided by JavaScript host that allows you to schedule'))