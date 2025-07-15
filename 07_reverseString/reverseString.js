const reverseString = function(string) {
    return string.split("").reverse().join("");
    
    /* backWord = "";
    for (let char = word.length -1; char >= 0; char--) {
        backWord += word[char];       
    }
    console.log(backWord); */
};
//console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
