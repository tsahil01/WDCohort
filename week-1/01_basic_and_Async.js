function sumHundred(num) {
    if (num > 0) {
        return num + sumHundred(num - 1);
    } else {
        return 0;  // Base case: return 0 when num is not greater than 0
    }
}
// console.log(sumHundred(1000));


function PatternCreation(n){
    for (let i = 0; i < n; i++) {
        let toprint = "*"
        for (let j = 0; j < i; j++) {
            toprint = toprint + toprint
        }
        console.log(toprint);
    }
}
// PatternCreation(3)

function StarPattern(n){
    for (let i = 0; i < n; i++) {
        let toprint = "**"
        for (let j = 0; j < i; j++) {
            toprint = toprint + toprint
        }
        console.log(toprint);
    }
}
// StarPattern("5")


// JS IS `SINGLE THREADED` (one core only)
// Core is a place where our code gets executed!
// In JS there is only one executer(Single threader/ one core) hence we run the code sequentially

// JS is Async in nature.
// Complex task in JS -> sending HTTP req, do complex calulation, etc.
// All Complex tasks is Async in nature
// Async task dont run on the same thread

// Example ->

// let a = readFromaFile();
// console.log((getSum(100))

// Here readfromaFile() is a big task and it would take 5sec. Which blocks the thread for that amount of time.
// till 5sec all other {task(getSum(100))} will be in waiting state for readFromaFile() to get over.
// To avoid this JS is Async in nature. 
// which means readFromaFile() will surely take 5sec but till then JS must not wait and should execute the below tasks.



// JS is loosely Typed and Cpp is Strongly typed