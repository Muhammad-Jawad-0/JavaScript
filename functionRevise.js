// // ========================= regular ============

// function regular(params) {}

// // ========================= expressionFunction ============

// const expressionFunction = function () {};

// // ========================= arrowFunction ============

// const arrowFunction = () => {};

// // ========================= Anonymous function ============

// setTimeout(function() {
//     console.log("I am anonymous function")
// },2000)

// // ========================= self Invoking function ============

// (function(){
//     console.log("Immediate Invoked Function")
// })();

// ========================= callback Function ============

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetch")
//         callback();
//     },2000)
// }

// fetchData(() => {
//     console.log("callback executed")
// })

// ========================= recursive Function ============

// function factotial(num) {
//     if(num === 0) {
//         return 1;
//     }
//     return num * factotial(num - 1)
// }

// let res = factotial(5)
// console.log(res)

// ========================= Generator Function ============
// squence of value return krte ha

// function* generatorFunction(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let geneResult = generatorFunction();

// console.log(geneResult.next().value);
// console.log(geneResult.next().value);
// console.log(geneResult.next().value);

// ========================= Method Function ============

// let userInfo = {
//     firstName : "Muhammad",
//     lastName : "Jawad",
//     fullName : function(){
//         return `Assalam-o-alaikum ${this.firstName} ${this.lastName} kaise hu ${this.lastName}`
//     }
// }

// let sayFullName = userInfo.fullName();

// console.log(sayFullName)

// ========================= constructor Function ============
// jo new object create krte ha...

// function Person(fName,lName,age){
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age
// }

// let jawadObj = new Person("Muhammad", "Jawad", 20);

// console.log(jawadObj)

// let arr = [0,2,4,25,43,2];

//  arr.sort();
// console.log(arr)


// let cheakArr = Array.isArray(arr);
// let cheakArr = Array.from(arr);
// let cheakArr = Array.of(arr, arr2);
// console.log(cheakArr)


