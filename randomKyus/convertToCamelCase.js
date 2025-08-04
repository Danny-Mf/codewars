https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str){
    return str?
        str.split('-').join(" ").split("_").join(" ").split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word[0] + word.slice(1).toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('') : '';
}
console.log(toCamelCase("The_Stealth-Warrior"));