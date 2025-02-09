// let x = "jawad";

// if(true){                   ///  not acceptable
//     var x = "kamil";
// }

// var x = "jawad";

// if(true){                /// acceptable
//     let x = "jawad";
// }

// const data = {
//   array1: [1, 2, 3, 4, 5, 6, 7, 8],
//   array2: ["a", "b", "c", "d", "e", "f", "g", "h"],
//   array3: [true, false, true, false, true, false, true, false],
//   array4: [10.5, 20.5, 30.5, 40.5, 50.5, 60.5, 70.5, 80.5],
//   array5: [
//     "apple",
//     "banana",
//     "cherry",
//     "date",
//     "fig",
//     "grape",
//     "kiwi",
//     "lemon",
//   ],
//   array6: [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 },
//     { id: 4 },
//     { id: 5 },
//     { id: 6 },
//     { id: 7 },
//     { id: 8 },
//   ],
//   array7: [null, null, null, null, null, null, null, null],
//   array8: [["x"], ["y"], ["z"], ["a"], ["b"], ["c"], ["d"], ["e"]],
// };

// data.array4 = data.array4.filter((ele, index) => ele !== 40.5
// );

// console.log(data);

// for (let keys in data) {
//   console.log("key >>>>>>" + keys, data[keys]);
//   if (keys === "array4") {
//     // array4Delete.push(data[keys].splice(3, 1));
//     data[keys].splice(3,1)
//   }
// }

// console.log(data);

///////////////////////////////////// Lexical this Binding

// function timer() {
//   this.seconds = 0;
//   setInterval(function () {
//     console.log(this.seconds++); // `this` is undefined in strict mode
//   }, 1000);
// }

// timer();

// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     console.log(this.seconds++); // `this` refers to Timer's context
//   }, 1000);
// }

// Timer();

///////////////////////////////////// No Arguments Object In Arrow

// Arrow functions mein arguments object nahi hota. Agar aap arguments ko use karte hain, toh wo parent function ka arguments object inherit karte hain (agar parent function mein ho).

// function outer() {

//   const inner = () => {
//     // arrow function ma
//     console.log(arguments);
//   };
//   inner(5, 6, 7);

// }

// outer(1, 2, 3, 4);

////////////////////////////////Regular Function mein arguments object

//  ka use Jab aap regular function banate hain, toh usmein aap directly arguments object use kar sakte hain, jo ek array-like object hota hai aur usmein wo saare arguments hote hain jo function ko pass kiye gaye hote hain.

// function showArguments() {
//   console.log(arguments); // arguments object
// }

// showArguments(1, 2, 3, 4);
// Output: [1, 2, 3, 4]

/////////////////////// Recursing Function

// const fibonacci = (n) => {
//     if(n <= 1){
//         return n
//       }

//       return fibonacci(n - 1) + fibonacci(n - 2)
//     }

//     // console.log(fibonacci(5));

//     console.log(fibonacci(5));

// --------------------------------------------

// function myFunc() {
//   let num = "jawad";
//   return num
// }

// console.log(typeof myFunc()); // output string.
// // because jo function se return huta ha wohi type hujata ha function ka. agr function call nh kre srf ""myFun"" likh kr type chek kre tu uska type "function" huga

// ********************************************************************

// const obj = {
//   name: "jawad",
//   enroll: () => {
//     console.log("you are succesfully enrolled");
//   },
// };

// function createCourse(name) {
//   return {
//     name: name,
//     enroll() {
//       console.log(`${this.name} you are succesfully enrolled`);
//     },
//   };
// }

// let studentJawad = createCourse("jawad");

// studentJawad.enroll();

// **************************************************************

// const course1  = {
//   title: "javascript"
// }

// const course2 = course1;

// course2.title = "C++"

// console.log(course1);
// console.log(course2); /// 2no ka title change hujaega

// *******************************************************************

// const course1 = {
//   title : "web-development"
// }

// const course2 = {...course1};

// course2.title = "Graphic Designer"

// console.log(course1);
// console.log(course2); // srf course2 ka title change huga...

// *******************************************************************

// const course1 = {
//     title : "web-development"
//   }
//   const course2 = course1;

//   console.log(course1 === course2) // ye 2no true ha q kke reference same ha 2no ka

// *******************************************************************

// const course1 = {
//     title : "web-development"
//   }
//   const course2 = {...course1};

//   console.log(course1 === course2) // ye 2no false ha q kke reference same nh ha alag alag ha

// *******************************************************************
////////////////////////// ForEach Method ////////////////////

// let names = ["jawad", "noman", "asad", "raza"];

// names.forEach((value) => {
//   if(value !== "asad"){
//     console.log(value)
//   }
// })

// *******************************************************************
////////////////////////// Map Method ////////////////////

// let names = ["jawad", "noman", "asad", "raza"];

// let mapArr = names.map((value) => {
//   return true
// })

// console.log(mapArr) // [true, true, true, true]: //  because map ma jo return huuga wohi new Array ma chale jaega. magr filter condition "[true, false]" ma chlata ha tu usma true return krne se orignal array ka element new arr ma chale jaega

// *******************************************************************
////////////////////////// filter Method ////////////////////

// let names = ["jawad", "noman", "asad", "raza"];

// let filterArr = names.filter((value) => {
//   return true
// })

// console.log(filterArr) // output: ['jawad', 'noman', 'asad', 'raza'] // because filter condition "[true,false]" se chlta ha agr return true krege tu orignal array ka sara element New Array ma chale jaega true nh jaega : yahi kam map method se krne se new array ma true chale jaega..

// *******************************************************************
////////////////////////// Object  ////////////////////

// let users = [
//   { name: "jawad", age: 20, role: "admin" },
//   { name: "asad", age: 20, role: "user" },
//   { name: "raza", age: 20, role: "user" },
//   { name: "farrukh", age: 20, role: "admin" },
//   { name: "hammad", age: 20, role: "user" },
// ];

// let obj = {};

// users.forEach((user) => {
//   if (obj[user.role]) {
//      obj[user.role].push(user);
//   } else {
//     obj[user.role] = [];
//     obj[user.role].push(user)
//   }
// });

// console.log(obj);

// console.log("anonymouse >>", anonymouse)
// console.log("annon >>", annon)

// ===========================================

// function binarySearch(arr, target) {
//   let left = 0, right = arr.length - 1;
//       //  0        5
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     // console.log("Mid HUn >>" , arr[mid])
//         // 30           30
//     if (arr[mid] === target) return mid; // Element mil gaya
//     else if (arr[mid] < target) left = mid + 1; // Right side search karo
//     else right = mid - 1; // Left side search karo
//   }

//   return -1; // Element nahi mila
// }

// let numbers = [10, 20, 30, 40, 50, 60];
// console.log(binarySearch(numbers, 30));
