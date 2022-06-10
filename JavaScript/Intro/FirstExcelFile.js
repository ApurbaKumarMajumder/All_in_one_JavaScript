// npm init
// node .\FirstExcelFile.js --source=teams.json --dest=teams.xls
// npm install excel4node
// npm install minimist

const minimist = require("minimist");
const fs = require("fs");
const excel = require("excel4node");

let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

// console.log(teams[0].matches[0].vs);
// console.log(teams[0].matches[0].result);

// create a new excel file
let wb = new excel.Workbook();

// create new books into the same excel file
for (let i=0; i<teams.length; i++){
    wb.addWorksheet(teams[i].name);
}
wb.write(args.dest);