// ----------------------Recursion---------------------

// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// let res = factorial(5);

// setInterval(() => {
// console.log("setInterval",res);

// },2000)

// setTimeout(() => {
//     console.log("setTimeout",res);
    
// },2000)

// ------------------------Generator Function-----------------------------------

// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = generateNumbers();
// console.log(gen.next().value);  
// console.log(gen.next().value);
// console.log(gen.next().value);


// -------------------Method Function------------------/

// const person = {
//     name: "jawad",
//     age: 21,
//     greet: function() {
//         console.log("Hello, " + this.name + ` and your age is ${this.age}`);
//         console.log(person.name); 
//         console.log(person.age); // ase bhi use kr sakhte ha
//     },
//     log: console.log(person.name)
// };

// person.log


// person.greet()


// -----------------------Constructor Function --------------------



// console.log(subStr);


// function Persion(name,age) {
//     this.name = name;
//     this.age = age;
// }

// const jawad = new Persion("jawad", 21);

// console.log(jawad);

// const nehal = new Persion("nehal", 18);

// console.log(nehal);