function duplicateEncode(word){
    const charCount = {};
    for (let char of word.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let result = '';
    for (let char of word.toLowerCase()) {
        result += charCount[char] > 1 ? ')' : '(';
    }
    return result;
}
console.log(duplicateEncode("Success"));