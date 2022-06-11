// npm install pdf-lib
// node FirstWritingPDF.js --source=teams.json --dest=root

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
    let folderName = path.join(args.dest, teams[i].name);
    fs.mkdirSync(folderName);
    for(let j=0; j<teams[i].matches.length; j++){
        let fileName = path.join(folderName, teams[i].matches[j].vs + ".pdf");
        // console.log(fileName);
        fs.writeFileSync(fileName, "", "utf-8");
    }
}