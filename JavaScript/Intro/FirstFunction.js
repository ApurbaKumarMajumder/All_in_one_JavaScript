/*
// ctrl + ` -> terminal
// ctrl + b -> explorer

let clargs = process.argv;
let n = clargs[2];

for(let i = 2; i <= n; i++){
    let isPrime = IsPrime(i);
    if(isPrime){
        console.log(i);
    }
}

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
*/

// first array with input

let clargs = process.argv;
let n = parseInt(clargs[2]);

let arr = [];
for(let i = 0; i < n; i++){
    let val = parseInt(clargs[i+3]);
    arr.push(val);
}

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(arr);
console.log(arr.length);

