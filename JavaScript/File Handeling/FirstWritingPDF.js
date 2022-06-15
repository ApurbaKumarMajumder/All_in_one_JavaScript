// npm install pdf-lib
// node FirstWritingPDF.js --source=teams.json --dest=worldcup

const minimist = require("minimist");
const fs = require("fs");
// const excel = require("excel4node");
const path = require("path");
const pdf = require("pdf-lib");

let args = minimist(process.argv);
// console.log(args)
let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(args.dest);
for(let i=0; i<teams.length; i++){
    let teamFN = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamFN);
    for(let j=0; j<teams[i].matches.length; j++){
        let matchFileName = path.join(teamFN, teams[i].matches[j].vs + ".pdf");
        // console.log(fileName);
        createScoreCard(teams[i].name, teams[i].matches[j], matchFileName);
    }
}

function createScoreCard(teamName, match, matchFileName){
    // this fun creates pdf for match in appropriate folder with correct details
    // here we will use pdf-lib to create the pdf
    console.log(teamName);
    console.log(match.vs);
    console.log(match.result);
    console.log(matchFileName);
    console.log("----------------------------");
}