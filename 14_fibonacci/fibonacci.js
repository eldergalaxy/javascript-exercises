// const fibonacci = function() {
// };

const fibonacci = function(n) {
    let seq = [0,1];
    for (let i = 2; i < n; i++ ){
        seq.push(seq[i-1] + seq[i-2]);
    } 
    return seq;
};
console.log(fibonacci(13));
// Do not edit below this line
module.exports = fibonacci;
