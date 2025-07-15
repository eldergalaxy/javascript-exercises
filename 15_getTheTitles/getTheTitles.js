

const books = [
    {
        title: 'Book',
        author: 'Name'
    },

    {
        title: 'Book2',
        author: 'Name2'
    },

    {
        title: 'Book3',
        author: 'Name3'
    },

    {
        title: 'Book4',
        author: 'Name4'
    },

    {
        title: 'Book5',
        author: 'Name5'
    },
];

const getTheTitles = function(arr) {
    let titles = [];
    for (let i = 0; i< arr.length; i++) {
        titles.push(Object.entries(arr[i])[0][1]);
    } 
    return titles;

};

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
