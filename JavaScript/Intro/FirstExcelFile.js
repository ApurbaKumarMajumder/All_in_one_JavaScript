// npm init
// node .\FirstExcelFile.js --source=teams.json --dest=teams.xlsx
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
let hstyle = wb.createStyle({
    font: {
        color: "red"
    },
    fill: {
        type: "pattern",
        patternType: "solid",
        fgColor: "blue"
    }
});

for (let i=0; i<teams.length; i++){
    // create new books into the same excel file
    let sheet = wb.addWorksheet(teams[i].name);
    sheet.cell(1, 1).string("opponent");
    sheet.cell(1, 2).string("Result");

    sheet.cell(1, 4).string("Rank");
    sheet.cell(1, 5).number(teams[i].rank);

    for(let j=0; j<teams[i].matches.length; j++){
        let vs = teams[i].matches[j].vs;
        let result = teams[i].matches[j].result;

        sheet.cell(2+j, 1).string(vs);
        sheet.cell(2+j, 2).string(result);
    }
}
wb.write(args.dest);