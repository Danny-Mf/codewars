//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0; 
  let y = 0; 
  for (let dir of walk) {
    if (dir === 'n') y++;
    if (dir === 's') y--;
    if (dir === 'e') x++;
    if (dir === 'w') x--;
  }

  return x === 0 && y === 0;
}
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));