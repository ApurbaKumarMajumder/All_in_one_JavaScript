// t1 = Read a file (disk)
// t2 = Calculate primes (cpu)
// t2 is done in parallel with t1
// node FirstCallback.js --source=f1.txt --dest=f2.txt --n=50000

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

console.log(args.source);
console.log(args.n);

// task1 starts in a better way
let t1 = Date.now();
console.log("Time at the start of task1 ", t1 % 100000);

// const data = fs.readFileSync(args.source);
fs.readFile(args.source, function(err, data){
    if(err == none){
        const t2 = Date.now();
        console.log("Time at the end of task1 ", t2 % 100000);
        console.log("Total for the completing of task1 ", (t2 - t1) , " miliseconds");
    } else {
        console.log("error happened");
    }
});
// a better task 1 completes here

// task 2 area starts

function IsPrime(x){
    let isPrime = true;

    for(let i=2; i<x-1; i++){
        if(x % i == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

let t3 = Date.now();
console.log("Time at the start of task2 ", t3 % 100000);

let arr = [];
for(let i=2; i<=args.n; i++){
    let isPrime = IsPrime(i);
    if(isPrime){
        arr.push(i);
    }
}


let t4 = Date.now();

console.log("Time at the end of task2 ", t4 % 100000);
console.log("Total for the completing of task1 ", (t4 - t3) , " miliseconds");
// task 2 area completes here

// console.log("Total time ", ((t2-t1) + (t4-t3)));