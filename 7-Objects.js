let person = {
    firstname: "Alex",
    lastName: "Marshall"
};

console.log(typeof person);
console.log(person);
console.log(person.firstname);

let address = {
    "building number": 5555,
    street: "Green Street",
    state: "Kentucky"
}

console.log(address);
console.log(address["building number"]);
console.log(address["street"]);

//add new property object
person.age = 30;
console.log(person);

//delete a property
delete person.age;
console.log(person);

//check a property if it exists
console.log("street" in address);

//yot can put arrays inside objects
let course = {
    name: "JS",
    url: "wwww.mycydeo.com",
    subjects: ["objects", "arrays", "functions", "live server"]
};

console.log(course);
console.log(course.subjects[1]);
console.log("-------------------------")

//loop using keys of the object
for (let key in course) {
    console.log(key + " : " + course[key])
}
//value which was array turned into string = Object,arrays,functions,live server
/**
 * We will have fixtures folder in Cypress Tool,we store JSON files
 */

//lets create an object with function, array,object in it
let myCar = {
    make: "Dacia",
    MODEL: "Logan",
    color: "orange",
    year: "2022",
    engine: {
        cylinders: 3,
        size: 1.0
    },
    extras: ["AC", "Cruise Control", "Sound System"],
    drive: function () {
        console.log("Running on LPG");
    }

}

myCar.drive(); // like in JAVA
console.log(myCar.extras[1]);

