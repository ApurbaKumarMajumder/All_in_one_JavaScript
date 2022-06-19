// the urpose of this roject is to extract information of worldcup 2019 from cricinfo and  process
// that in the form of excel and pdf scorecards
// the real purpose is to learn how to extract information and get experience with js
// A very good reason to ever make a project is to have good function

// npm init -y
// npm install minimist
// npm install axios
// npm install jsdom
// npm install excel4node
// npm install pdf-lib

// node .\1_CricinfoExtracter.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");

let args = minimist(process.argv);
// console.log(args.excel);
// console.log(args.dataFolder);
// console.log(args.source);

// download using axios
// extract information using jsdom
// manipulate data using array functions
// save in excel using excel4node
// create folders and prepare pdfs

let responseKaPromise = axios.get(args.source);
responseKaPromise.then(function(responce){
    let html = responce.data;
    // console.log(html);

    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let matches = [];
    // let match = {

    // };
    let matchDivs = document.querySelectorAll("div.match-score-block");
    // console.log(matchDivs.length);

    for(let i=0; i<matchDivs.length; i++){
        let matchdiv = matchDivs[i];
        let match = {
            t1: "",
            t2: "",
            t1s: "",
            t2s: "",
            result: ""
        };

        let teamParas = matchdiv.querySelectorAll("div.name-detail > p.name");
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;

        let scoreSpans = matchdiv.querySelectorAll("div.score_detail > span.score");
        if(scoreSpans.length == 2){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = scoreSpans[1].textContent;
        } else if(scoreSpans.length == 1){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = "";
        } else {
            match.t1s = "";
            match.t2s = "";
        }

        let resultSpan = matchdiv.querySelector("div.status-text > span");
        match.result = resultSpan.textContent;

        matches.push(match);
    }

    console.log(matches);
    let teams = [];
    for(let i=0; i<matches.length; i++){
        populateTeams(teams, match);
    }
})

function populateTeams(teams, match){
    let t1idx = teams.findIndex(function(team){
        
    })
}

function populateMatchesInTeams(matches, teams, match){

}
//     let dom = new jsdom.JSDOM(html);
//     let document = dom.window.document;

//     let matches = [];
//     let matchScoreDivs = document.querySelectorAll("div.match-score-block");
//     for(let i=0; i<matchScoreDivs.length; i++){
//         let match = {

//         };

//         let namePs = matchScoreDivs[i].querySelectorAll("p.name");
//         match.t1 = namePs[0].textContent;
//         match.t2 = namePs[1].textContent;

//         let scoreSpans = matchScoreDivs[i].querySelectorAll("div.status-text > span.score");
//         if (scoreSpans.length == 2) {
//             match.t1s = scoreSpans[0].textContent;
//             match.t2s = scoreSpans[1].textContent;  
//         } else if (scoreSpans.length == 1) {
//             match.t1s = scoreSpans[0].textContent;
//             match.t2s = "";
//         } else {
//             match.t1s = "";
//             match.t2s = "";
//         }
//         // match.result = "";

//         let spanResult = matchScoreDivs[i].querySelector("div.status-text > span");
//         match.result = spanResult.textContent;

//         matches.push(match);
//         console.log(i);
//     }
//     console.log(matches);
//     // let title = document.title;
//     // console.log(title);
// }).catch(function(err){
//     console.log(err);
// })