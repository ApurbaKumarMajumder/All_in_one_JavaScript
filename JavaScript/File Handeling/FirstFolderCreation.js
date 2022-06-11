// node FirstFolderCreation.js --source=teams.json --dest=root
// npm install minimist
// npm init

const minimist = require("minimist");
const fs = require("fs");
const excel = require("excel4node");
const path = require("path");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

for(let i=0; i<teams.length; i++){
    let foldername = path.join(args.dest, teams[i].name);
    console.log(foldername);
    // fs.mkdirSync(args.dest + "/" + teams[i].name);
    // not to try this way of making path as never use / for making files
    fs.mkdirSync(foldername); 
}