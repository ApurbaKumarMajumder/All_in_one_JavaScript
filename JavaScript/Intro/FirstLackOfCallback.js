/*
// t1 = Read a file (disk)
// t2 = Calculate primes (cpu)
// t3 = Write a file (disk)
// t4 = Calculate square of primes (cpu)
// t2 is done after t1
// node FirstLackOfCallback.js --source=f1.txt --dest=f2.txt --n=50000

// function IsPrime(x){
//     let isPrime = true;

//     for(let div = 2; div * div <= x; div++){
//         if(x % div == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     return isPrime;
// }

// let minimist = require("minimist");
// let fs = require("fs");

// let args = minimist(process.argv);
// // console.log(args.source);
// // console.log(args.dest);
// // console.log(args.n);

// // task1 area begins
// let t1 = Date.now();
// console.log("Starting task1 at " + t1 % 100000);

// let data = fs.readFileSync(args.source);

// let t2 = Date.now();
// console.log("Finishing task1 at " + t2 % 100000);
// console.log(t2 - t1);
// // task1 area ends

// // task2 area begins
// let t3 = Date.now();
// console.log("Starting task2 at " + t3 % 100000);

// for(let i=2; i<args.n; i++){
//     let isPrime = IsPrime(i);
//     if(isPrime == true){
//         arr.push(i)
//     }
// }

// let t4 = Date.now();
// console.log("Finishing task2 at " + t4 % 100000);
// console.log(t4 - t3);
// // task2 area ends
*/

// t1 = Read a file (disk)
// t2 = Calculate primes (cpu)
// t2 will be done after t1, which is not good
// node

function IsPrime(x){
    let isPrime = true;

    for(let div = 2; div * div <= x; div++){
        if(x % div == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

// console.log(args.source);

// task1 area begins
let t1 = Date.now();
console.log("Starting task1 at " + t1 % 100000);

let data = fs.readFileSync(args.source);

let t2 = Date.now();
console.log("Finishing task1 at " + t2 % 100000);
console.log(t2 - t1);
// task1 area ends


// task2 area begins
let t3 = Date.now();
console.log("Starting task2 at " + t3 % 100000);

let arr = [];
for(let i=2; i<args.n; i++){
    let isPrime = IsPrime(i);
    if(isPrime == true){
        arr.push(i)
    }
}

let t4 = Date.now();
console.log("Finishing task2 at " + t4 % 100000);
console.log(t4 - t3);
// task2 area ends