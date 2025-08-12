//https://www.codewars.com/kata/6328770fdfffbe000f4bb280/train/javascript
//algorithm
//check for the smallest side
//get the size of the big tile that can fit in there
//find how many tiles can fit in there across
//find how many tiles can fit down then find tiles used
// use recuursion adding number of tiles.

function numTiles(width, height) {
  width = BigInt(width);
  height = BigInt(height);
  if (width === 0n || height === 0n) return 0n;

  let minSide = width < height ? width : height;
  let tileSize = 1n << BigInt(Math.floor(Math.log2(Number(minSide))));
  let tilesAcross = width / tileSize;
  let tilesDown = height / tileSize;
  let tilesUsed = tilesAcross * tilesDown;

  let remRight = width % tileSize;
  let remBottom = height % tileSize;

  return (
    tilesUsed +
    numTiles(remRight, height - remBottom) +
    numTiles(width - remRight, remBottom) +
    numTiles(remRight, remBottom)
  );
}

console.log(numTiles( 13, 11 ));

/* ___________________________
|               |  4x4  |_|
|               |       |_|
|               |       |_|
|               |_______|_|
|    8x8        |  4x4  |_|
|               |       |_|
|               |       |_|
|_______________|_______|_|
|2x2|2x2|2x2|2x2|2x2|2x2|_|
|___|___|___|___|___|___|_|
|_|_|_|_|_|_|_|_|_|_|_|_|_| */