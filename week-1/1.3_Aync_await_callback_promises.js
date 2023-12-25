// Asynchronous JS, Callbacks, Promises, Async/Await

// Asynchronous programming is a technique that allows a program to run a second set of instructions 
// while focusing on its primary process. 
// It also allows a program to start a long-running task and still be responsive to other events while that task runs. 

// Example--->>
function printToScreen(){
    console.log("Hello World");
}
// setTimeout(printToScreen, 3*1000); // prineToScreen must run after 3 sec

let counter = 0;
for(let i=0; i<1000; i++){
    counter = counter + 1
}
// console.log(counter);

// Output=>
    // 1000
    // Hello World    // After 3 sec


// Here we can see that setTimeout() is a async code but this doesnt interrupt conter wala code.
// In short, bcoz of setTimeout() the printToScreen() will execute after 3 sec. Till then the CPU/code cant be idle.
// It will still execute the tasks below it.

// ChatGpt response=>
// you've provided a good example of asynchronous programming using setTimeout in JavaScript. 
// In this example, the `printToScreen` function is scheduled to run after 3 seconds using `setTimeout`, 
// which is an asynchronous operation. 
// However, the code doesn't wait for the setTimeout to complete before continuing with the next tasks.
// This is a fundamental concept in asynchronous programming, 
// allowing programs to remain responsive to other tasks while potentially time-consuming operations are being carried out in the background.




// StopWatch coding =>
counter = 1
let counter2 = 1
function printCounter(){
    console.clear()
    console.log(counter);
    counter++
}

// setInterval(printCounter, 1000)

// for(let i = 0; i<100000000000000000; i++){
//     counter2++
// }
// console.log(counter2);

// In the above code, the for loop is a complex task which is not async task, but setInterval() is async task. which prints the counter after every 1 sec.
// Since the for loop is complex task and it is complete utlizing JS single thread, it will ignore the setInterval()  

// ChatGpt response =>
// Alright, let's imagine your JavaScript code is like a series of tasks that need to be done.

// setInterval(printCounter, 5000): You told the computer to do a task every 5 seconds. It's like asking it to say "Hello!" every 5 seconds.
// for (let i = 0; i < 100000000000000000; i++) { counter2++ }: But then, you gave the computer another big job. It's like telling it to count from 1 to a really, really, really big number. 
// While the computer is doing this big job, it forgets to say "Hello!" every 5 seconds because it's so busy counting.
// So, even though the computer was supposed to say "Hello!" (print the counter) every 5 seconds, it got distracted by the big counting job you gave it. 
// Once it finishes counting all the way up, then it remembers to say "Hello!" again.
// In simpler terms, the computer has different tasks to do, and sometimes, if one task takes a long time, it might forget to do the other tasks for a while.




// JS runtime ---> Call Stack, Web Apis, Event Loop, Callback Queue. 
// See this here => http://latentflip.com/loupe/?code=CmNvbnNvbGUubG9nKCJoZWxsbyIpOwpjb25zb2xlLmxvZygiSGVlbGxvbyIpOwoKZnVuY3Rpb24gYSgpewogICAgY29uc29sZS5sb2coIkhJIikKfQoKCmZ1bmN0aW9uIGEoKXsKICAgIGNvbnNvbGUubG9nKCJCeWUiKQp9CgoKYSgpCmIoKQ%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// Async => http://latentflip.com/loupe/?code=CmZ1bmN0aW9uIHByaW50KCl7CiAgICBjb25zb2xlLmxvZygiaW5zaWRlIHByaW50Iik7Cn0KCnNldFRpbWVvdXQocHJpbnQsIDEwMDApCgpjb25zb2xlLmxvZygiaGVsbG8iKTsKY29uc29sZS5sb2coIkhlZWxsb28iKTsKCmZ1bmN0aW9uIGEoKXsKICAgIGIoKQogICAgY29uc29sZS5sb2coIkhJIikKfQoKCmZ1bmN0aW9uIGEoKXsKICAgIGNvbnNvbGUubG9nKCJCeWUiKQp9CgoKYSgpCg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// Here callStack is simple stack which puts the tasks.
// Web API keeps the async task till it complets. 
// Web API runs on different thread
// Callback Queue keeps the completed async tasks and the puts in the callback stack.

// Chat Gpt response =>
// When you call a function, it goes on the plate stack (call stack).
// If a task takes time (like waiting for a timer), it goes to the helper (Web API).
// When the helper finishes, it writes a note and puts it in the line (callback queue).
// The event loop is like a person checking if you're done with your plates. If you are, they take the notes from the line and start working on those tasks.



// Here is the COMPLEX TOPIC =>
// PROMISES =>

// Callback hell?? ->
// Async call chaining =>

// setTimeout(function(){
//     console.log("Hello 1");
//     setTimeout(function(){
//         console.log("Hello 2");
//     }, 2000)
// }, 1000)

// This above is an example of Async calling channing.. Which is kind of tricky or difficult. Hence promises were introduced.
// to avoid callbacks Promises were introduced!



// Code with callback =>
// setTimeout( ()=> {
//     console.log("medicine 1 recvd");
// }, 2000)


// Same Code with Promises =>
function promiseBody(resolve){
    setTimeout(resolve, 2000)
}
function medicine1Get(){
    return new Promise(promiseBody)
}


let medicine = medicine1Get()

console.log(medicine); // OP=> Promise { <pending> }

medicine.then( function(){
    console.log("medicine 1 recvd");
})

// In promises Whenever I called a callback func it immediately gives me a promise  

// Impt =>
// fs.read('a.txt', callBackFunc ) // simple callback

// Another way to use promises using just .then() =>
// fs.read('a.txt').then( callBackFunc )







// SetTimeout(callbackFunc, timeInMiliSeconds)  vs  SetInterval(callbackFunc, timeInMiliSeconds) =>
// `setTimeout` is used to execute a function once after a specified delay.
// `setInterval` is used to repeatedly execute a function at specified intervals.
// SetTimeout delay lagata hai aur SetInterval execute krta hai chese after perticular time period