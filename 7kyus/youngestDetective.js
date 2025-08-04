//https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript
//remove the white spaces from the string
//get the characters with matching positions in array
// if you miss atleast one character, return: "NO MISSION TODAY"
function missingWord(nums, str){
    const newStr=str.split(' ').join('');
    const newN= [...nums].sort((a,b) => a-b);
    return newStr.length > newN.at(-1)? newN.map(el => newStr[el]).join('').toLowerCase(): `No mission today`;

}

console.log(missingWord([3, 5,0], "I love you"));
console.log(missingWord([7, 10, 1], "see you later"));
console.log(missingWord([50, 4, 6], "Hi everybody"));