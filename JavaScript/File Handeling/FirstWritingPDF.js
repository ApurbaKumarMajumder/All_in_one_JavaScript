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
    // PDF Creation
    // const pdfDoc = await PDFDocument.create()
    // const page = pdfDoc.addPage()
    // page.drawText('You can create PDFs!')
    // const pdfBytes = await pdfDoc.save()

    // console.log(teamName);
    // console.log(match.vs);
    // console.log(match.result);
    // console.log(matchFileName);
    // console.log("----------------------------");

    let t1 = teamName; // done
    let t2 = match.vs; // done
    let result = t1 + " " + match.result; // done

    let originalBytes = fs.readFileSync("Template.pdf"); // done
    
    let promiseToLoadBytes = pdf.PDFDocument.load(originalBytes);
    promiseToLoadBytes.then(function(pdfdoc){
        let page = pdfdoc.getPage(0); // done
        page.drawText(result, {
            x: 300,
            y: 513,
            size: 14
        }); // done
        let promiseToSave = pdfdoc.save();
        promiseToSave.then(function(changedBytes){
            fs.writeFileSync(matchFileName, changedBytes); // done
        })
    })
}