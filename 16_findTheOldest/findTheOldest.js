const people = [
      {name: "Carly", yearOfBirth: 1908, yearOfDeath: 2025},
      {name: "Ray", yearOfBirth: 1962, yearOfDeath: 2025},
      {name: "Jane", yearOfBirth: 1912, yearOfDeath: 2025}
      ];


const objTest = {name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941};


// for (let person = 0; person < people.length; person++) {
//     console.log(people[person].name);
// };

let oldestYear = Infinity;
let oldestPerson = null;

for (const person of people) {
  if (person.yearOfBirth < oldestYear) {
    oldestYear = person.yearOfBirth;
    oldestPerson = person.name;
  } 
}
console.log('current oldest is ' + oldestPerson)











// console.log(objTest.name);
// console.log(people[1].name);


// console.log('oldest person is' + maxFruit)
// console.log(people[0].yearOfBirth);
// Do not edit below this line
// module.exports = findTheOldest;
