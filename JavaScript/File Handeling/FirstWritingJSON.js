// npm init
// npm install minimist
// node FirstWritingJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

let teams = [
    {
        name: "India",
        rank: 1,
        matches: [
            {
                vs: "England",
                result: "win"
            },
            {
                vs: "Australia",
                result: "win"
            }
        ]
    },
    {
        name: "Australia",
        rank: 3,
        matches: [
            {
                vs: "England",
                result: "win"
            },
            {
                vs: "India",
                result: "lost"
            }
        ]
    },
    {
        name: "England",
        rank: 2,
        matches: [
            {
                vs: "India",
                result: "lose"
            },
            {
                vs: "Australia",
                result: "lose"
            }
        ]
    }
];

console.log(teams[2].matches[1]);
console.log(teams[2].matches[1].vs);

let json = JSON.stringify(teams);
fs.writeFileSync(args.dest, json, "utf-8");