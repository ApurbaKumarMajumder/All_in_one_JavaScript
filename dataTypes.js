let yourAge = 18; // number
let yourName = "Bob" // string
let name = {first: 'Jane', last: 'Deo'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// String in JavaScript (common methods)
let fruits = 'banana';
let moreFruits = 'banana \napple';                          // new line

console.log(moreFruits);
console.log(fruits.length);
console.log(fruits.indexOf('nan'));
console.log(fruits.slice(2, 6));
console.log(fruits.replace('ban', '123'));
console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits[2]);
console.log(fruits.split(''));   // split by characters

fruits = 'banana, apple, orange, blackberry'
console.log(fruits.split(','));  // split by a comma