let yourAge = 18; // number
let yourName = "Bob" // string
let name = {first: 'Jane', last: 'Deo'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// 1. String in JavaScript (common methods)
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

// 2. Array
let fruit = ['banana', 'apple', 'orange', 'pineapples'];
fruit = new Array('banana', 'apple', 'orange', 'pineapples');

// alert(fruit[1]);
console.log(fruit[2]);   // access value at index 2nd

fruit[0] = 'pear';
console.log(fruit);

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// array common methods
console.log('to String',fruit.toString());
console.log(fruit.join(' * '));
console.log(fruit);
console.log(fruit.pop(), fruit);  // removes last item
console.log(fruit.push('blackberries'), fruit);   // appends at last
console.log(fruit[4]);
// fruit[4] = 'new fruit';
fruit[fruit.length] = 'new fruit';  // same as push
console.log(fruit);
fruit.shift();  // removes first element from an array
console.log(fruit);
fruit.unshift('kiwi');  // add first element to an array
console.log(fruit);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruit.concat(vegetables);  // combine arrays

console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b}));
// console.log(someNumbers.sort(function(a, b) {return b-a}));  // reverse sorting

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

// 4. Objects in Javascript
// dictionaries in Python

let student = {
    first: 'Rafeh', 
    last: 'Qazi', 
    age: 25, 
    height: 170,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh';  // change value
// console.log(student.first);
// student.age++;
// console.log(student.age);

console.log(student);
console.log(student.studentInfo());