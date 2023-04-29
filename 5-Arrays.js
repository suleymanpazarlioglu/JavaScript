/**
 * There is no Collection is JS.In JS we only have Arrays and Map
 * Not fixed size
 * There are two important Brachets in JS
 * [] ----> creates an array
 * {} ----> creates an object
 */

let scores = new Array();//creates an empty Array
let numbers = new Array(10);//creates an array with size 10
let emptyArray=[]; // creates empty array
let myNumbers=new Array(1,2,3,5,8,13);
let colors=["red","green","black","blue"];

console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);

//print second element in an array
console.log(colors[1]);//index based like JAVA
//add element to an Array
colors.push("white");//add to element at the end
console.log(colors);

//add element to beginning of the array
colors.unshift("orange");//add to element an the beginning
console.log(colors);

colors.pop();//delete to element from the end
console.log(colors);

//the size of the array
console.log(colors.length);
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}

//loop with values of array
for (let value of colors) {
    console.log(value);
}

colors.forEach(element =>{
    console.log(element);
});

//can we add multiple type of Data? YES
let soupOfData=[5,"ali",true,undefined];// you can also put Map,Object,Functions inside arrays
soupOfData.forEach(element => {
    console.log(typeof element);
});