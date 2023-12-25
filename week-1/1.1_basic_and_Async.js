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

// JavaScript (JS) can be both asynchronous (async) and synchronous (sync), depending on how code is written and executed.
// JS is also Async in nature.
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



// CHAT GPT RESPONSE ->
// Yes, your explanation captures the essence of asynchronous programming in JavaScript quite well. 
// You correctly highlighted that JavaScript is asynchronous in nature, and complex tasks, such as sending HTTP requests or performing lengthy calculations, 
// are typically handled asynchronously to avoid blocking the main thread.

// In your example, you mentioned a scenario where readFromaFile() is a time-consuming task that takes 5 seconds to complete. 
// In a synchronous program, this task would block the execution of subsequent code until it finishes. 
// However, in an asynchronous environment, JavaScript allows other tasks to be executed while waiting for the completion of the asynchronous task.

// Your use of the terms "waiting state" and "execute the below tasks" accurately conveys the idea that asynchronous operations in JavaScript 
// enable the program to continue executing other tasks without waiting for the completion of the asynchronous operation.

