const repeatString = function(string, num ) {
    //repeatString('hey', 3) // returns 'heyheyhey'
    let result = "";
    for (let i = 0; i < num ; i++) {
        result += string;
    }
    return result;
};


console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;