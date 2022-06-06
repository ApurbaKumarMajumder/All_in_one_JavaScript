// npm install minimist
let parser = require("minimist");
let args = parser(process.argv);

console.log(args);

// node FirstModule.js -x 4 & -y 10
// node FirstModule.js --name="Apurba Kumar Majumder" --age=34

let name = args.name;
let age = args.age;

if(age > 30){
    console.log(`Hello ${name}. You must go home`);
} else {
    console.log(`Heya ${name}. Where is the party tonight?`);
}