// const removeFromArray = function(array, index) {
    
//     const copyWithoutElement = array.slice(index-1,index);
//     console.log(copyWithoutElement);
// }

//filter creates an array keeping elements where the callback returns true
//“This function returns a new array that excludes any elements you specify as extra arguments.

const removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}

newArray = removeFromArray(['a','b','c','d','e','f'],'e','a');

console.log(newArray);
