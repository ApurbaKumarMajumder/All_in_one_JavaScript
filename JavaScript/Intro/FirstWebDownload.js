// npm install axios
// node FirstWebDownload.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest="download.html"

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");

let args = minimist(process.argv);
// console.log(args.url);
// console.log(args.dest);

let downloadPromise = axios.get(args.url);
downloadPromise.then(function(responce){
    let html = responce.data;
    fs.writeFileSync(args.dest, html, "utf-8");
}).catch(function(err){
    console.log(err);
})