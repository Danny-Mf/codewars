// Returns number of complete beeramid levels
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