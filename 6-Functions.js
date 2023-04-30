//no access modifier,no method overloading
function add(a, b) {
    console.log("Total is : " + (a + b));
}

add(10, 20);

//return type functions
function multiply(a, b) {
    return (a * b);
}

console.log(multiply(4, 5));

//no overloading 
add(10,20,30);//ignores  after the second parameter

/**
 * They call functions as first class citizens of JavaScript
 * 1-you can pass a function as an arguments to other functions
 * 2-you can return a function from a function
 * 3-you can store a function into a variable
 */
let divide = function(a,b){
    return a/b;
}

console.log(divide(6,2));

let anyFunction=divide;
console.log(anyFunction(8,2));

//1-you can pass a function as an arguments to other functions
function sum(a,b){
    return a+b;
}

function avg(a,b,fn) {
    return fn(a,b)/2;
}

let avgResult=avg(10,2,sum);
console.log(avgResult);