/**
 *  in JAVA: make database connection and get some data,then you use this data inside your code
 * ---connect DB
 * ---gets data
 * ---is waiting until the data is received
 * ---then executes rest of the code
 *  in JS: 
 * ---while trying to connect DB
 * ---the rest of the functions does not wait  -- async code
 */

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

let data = waitingForSomeServerToAct();//calling server connection, getting the data and storing it to a variable
functionThatNeedBackendData(data);//this function does not wait for the result of previous