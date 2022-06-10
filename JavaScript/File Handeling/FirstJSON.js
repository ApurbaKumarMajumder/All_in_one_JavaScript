// npm init
// npm install minimist
// node FirstJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);
console.log(args.dest);

// JSON = Javascript Object Notation
// JSON means saving data in the same format as of javascript objects

// an object
let s1 = {
    name: "Sumeet",
    age: 34
};
// Note: s1 is an object. name and age are properties these are a.k.a data member.

let s2 = {
    name: "Moksh",
    age: 25
}

// this is first way to create a array of objects
let students = [s1, s2];
console.log(s1.name);
console.log(s1.age);

// make it JSON
let json = JSON.stringify((students));
fs.writeFileSync(args.dest, json, "utf-8");

let arrOfObjects = [
    {
        name: "Sumeet",
        age: 34
    },

    {
        name: "Moksh",
        age: 25
    },

    {
        name: "Jasbir",
        age: 24
    }
];

let newjson = JSON.stringify(arrOfObjects);
fs.appendFileSync(args.dest, newjson, "utf-8");

console.log(arrOfObjects[0].name);
console.log(arrOfObjects[0].age);

console.log(arrOfObjects[1].name);
console.log(arrOfObjects[1].age);

console.log(arrOfObjects[2].name);
console.log(arrOfObjects[2].age);