// Returns number of complete beeramid levels
//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/solutions/javascript
function beeramid(bonus, price) {
  var maxBeerCans=Math.floor(bonus/price);
  var levels=0;
  var sumlevels=0
  while( sumlevels+ (levels+1)**2<=maxBeerCans){
     levels+=1;
     sumlevels+=levels**2;
  }
  return levels;

}
console.log(beeramid(1500, 2));