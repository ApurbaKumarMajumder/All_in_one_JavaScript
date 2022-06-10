// npm install jsdom
// node FirstProcessingHTML.js --source=download.html

let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom"); // will load html and prepare the dom for programmer just like a browser would have

// DOM -> DOM is an object tree which is not by the browser but for the programmer.
// Programmer can interact with view of page using dom

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, html){
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;

    let elements = document.querySelectorAll(".description");
    for(let i=0; i<elements.length; i++){
        console.log(elements[i].textContent);
    }
}) 
