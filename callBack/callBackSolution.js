function waitingForSomeServerToAct() {
    let dataNeeded;
    setTimeout(() => {
        console.log("Backend information have just been received");
        dataNeeded = "CYDEO";
        console.log(dataNeeded);
    }, 5000);
    return dataNeeded;
}

function functionThatNeedBackendData(info) {
    console.log("I need to use Backend Data " + info);
}

functionThatNeedBackendData(waitingForSomeServerToAct());

/**
 * The first solution JS developers came up with was this callback situtation
 * ES6 promises handles async nature of JS
 * 2017 --- async functions,await keyword
 * What is a callback hell?
 * What is async code what is sync code?
 */

//alert("This is a JavaScript alert");

/**
 * There are some JS commands like alerts,prompt : these will work only in browser with Live Server
 */

let userName=prompt("Enter your username");
console.log(userName);