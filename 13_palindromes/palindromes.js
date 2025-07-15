const palindromes = function (string) {
    return string.split('').reverse().join('');
}
console.log(palindromes('toilet'));
// Do not edit below this line
module.exports = palindromes;
