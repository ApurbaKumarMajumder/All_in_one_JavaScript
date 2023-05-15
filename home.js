console.log("Hello");

// alert("Hello this is Apurba");

// How to write a comment inline

// Variables
var b = "smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with Javascript
/* ... It's just a Fancy way of saying
change HTML with Javascript */

// var age = prompt("What is your Age?");
// document.getElementById("someText").innerHTML = age;

// Number in Javascript
var num1 = 5.7;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 / 6);
console.log(num1 * 6);
console.log(num1 % 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

num1 -= 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

/* Let's create a function that take in a name 
and says hello followed by your name 

For example

Name: "Apurba"
Return: "Hello Apurba"
*/

function greeting(yourName) {
    // string concatination
    var result = 'Hello ' + yourName;
    console.log(result);
}

var name = prompt("what is your name?");
greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sum2Numbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sum2Numbers(10, 20);