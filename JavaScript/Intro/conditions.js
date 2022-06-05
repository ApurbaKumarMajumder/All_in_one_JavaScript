/*
// let clargs = process.argv;
let n = parseInt(clargs[2]);

if(n % 2 == 0){
    console.log(n + " is even");
}
else{
    console.log(n + " is odd");
}

// loops

for(let i = 1; i <= n; i++){
    console.log(i);
}

// isPrime function in javascript
let clargs = process.argv;
let n = parseInt(clargs[2], 10);

let isPrime = true;
for(let div = 2; div * div <= n; div++){
    if(div % 2 == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(n + " is Prime");
} else {
    console.log(n + " is not Prime");
}
*/

let clargs = process.argv;
let n = parseInt(clargs[2]);

for(let i=1; i <= n; i++){
    let line = "";
    for(let j=1; j <= i; j++){
        line = line + "*\t";
    }
    console.log(line);
}