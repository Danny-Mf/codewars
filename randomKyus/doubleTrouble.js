//https://www.codewars.com/kata/57f7796697d62fc93d0001b8/solutions/javascript?filter=me&sort=best_practice&invalids=false
function trouble(x, t){
  const len=x.length;
  const res=[];
  res.push(x[0]);
  for(let i=1; i<len; i++){
    x[i]+res[res.length-1]!==t? res.push(x[i]): res;

  }
  return res;
}
console.log(trouble([1, 3, 5, 6, 7, 4, 3], 20));
/*const trouble = (x, t) =>
  x.reduce((pre, val) => val + pre[pre.length - 1] !== t ? [...pre, val] : pre, []); */