//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
function productFib(prod){
    let F = [0, 1];
    while (F[F.length-1] * F[F.length-2] < prod) {
        F.push(F[F.length-1] + F[F.length-2]);
    }
    return [F[F.length-2],F[F.length-1], F[F.length-2] * F[F.length-1] === prod];
}
console.log(productFib(714));
