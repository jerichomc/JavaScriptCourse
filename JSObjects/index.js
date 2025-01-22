// object - A collection of related properties and/or methods
// Can represent real world objects
// object = {key:value, function()}

// const person1 = {
//     firstName: "Kevin",
//     lastName: "James",
//     age: 33,
//     isEmployed: true,
//     sayHello: function(){
//         console.log("Hello")
//     },
// }

// const person2 = {
//     firstName: "Adam",
//     lastName: "Sandler",
//     age: 31,
//     isEmployed: false,
//     sayHello: function(){
//         console.log("Hi")
//     }
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

// person1.sayHello();
// person2.sayHello();

//constructors 
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
}