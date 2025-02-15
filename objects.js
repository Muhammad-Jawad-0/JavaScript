// const obj = {
//     name: "umer",
//     count: function(){
//         console.log(this.name)
//     }
// }

// ========================FOR SYMBOL======================

// let mySym = Symbol("key1")




// const obj = {
//     name: "jawad",
//     email:"jawad@gmail.com",
//     id:240418580,
//     password: "jawad1122.js",
//     [mySym] : "Key1"
// }

// console.log(obj[mySym]);

//==========================================

// obj.greetingOne = function (){
//     console.log("hello js gretting One");
// }

// obj.greetingTwo = function (){
//     console.log(`hello js gretting ${this.name}`); // isma this milega q ke regular function agr method ma bana hua tu parent object se this inherit krta ha...
// }

// obj.greetingTwo =  () => {
//     console.log(`hello js gretting Two ${this.name}`); // arrow function object se this nh lera balke parent function se this leta ha;
// }
// 

// console.log(obj);

// console.log(obj.greetingOne());
// console.log(obj.greetingTwo())


// console.log(obj["password"]);
// console.log(typeof obj[mySym]);


//==============================================


// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     console.log(this.seconds++); // `this` refers to Timer's context
//   }, 1000);
// }

// Timer();

// +++++++++++++++++++++++++++++++++++++++++++
// function createCourse(name) {
//     return {
//       name: name,
//     enroll() {
//       console.log(`${this.name} you are succesfully enrolled`);
//     },
//   };
// }

// let studentJawad = createCourse("Talha");

// studentJawad.enroll();


// +++++++++++++++++++++++++++++++++++++++++++

// const course1 = {
//     title : "web-development"
//   }
//   const course2 = {...course1};

//   console.log(course1 === course2) // false



// *******************************************************************
////////////////////////// ForEach Method ////////////////////

// let names = ["jawad", "noman", "asad", "raza"];

// let newArr = [];
// names.forEach((value) => {
//   if(value !== "asad"){

//     newArr.push(value)
//   }
// });

// console.log(newArr);

// *******************************************************************
// let obj = {
//     name: "jawad"
// }

// let obj2 = obj;

// obj.age = 21
// obj2.name = "nehal";


// console.log(obj);
// console.log(obj2);

// *******************************************************************


// let users = [
//   { name: "jawad", age: 20, role: "admin" },
//   { name: "asad", age: 20, role: "user" },
//   { name: "raza", age: 20, role: "user" },
//   { name: "farrukh", age: 20, role: "admin" },
//   { name: "hammad", age: 20, role: "user" },
// ];



// let obj = {};

// users.forEach((user) => {
//     if (obj[user["role"]]) {
        
//        obj[user["role"]].push(user);
//     } else {
//       obj[user["user"]] = [];
//       obj[user["user"]].push(user)
//     }
//   });
  
//   console.log(obj);
  

// users.forEach((user) => {
//   if (obj[user.role]) {
//      obj[user.role].push(user);
//   } else {
//     obj[user.role] = [];
//     obj[user.role].push(user)
//   }
// });

// console.log(obj);


// ****************************** delete in Object *************************************
// let name = {
//     firstName : "Muhammad", 
//     lastName : "Jawad",
// }
// console.log("name before >>", name)


// delete name.lastName; // object ki key delete krne ke leye delete use huta ha

// console.log("name After >>", name)

// ****************************** delete in Arrays *************************************

// let nameArr = ["Arham", "Affan", "Jawad", "Nehal"];

// delete nameArr[0]; // arham delete hugya

// console.log("nameArr >>" , nameArr);




// ****************************** delete in primative *************************************

// let name = "jawad";

// console.log(name);

// delete name; // variable ma delete nh huta

// console.log(name);

// ****************************** Truthy and Falsy *************************************


// true

// any non zero number
// any non empty string
// any object {} [] true

// false


// *******************************************************************

// let num = 0 
// num = 10 == 5

// console.log(num) // false

// var a = 0;
// var a = 10 == 5


// console.log(a) // false


// *******************************************************************

// let obj1 = {
//     name: "jawad"
// }

// let obj2 = obj1;

// console.log( obj1 == obj2);


// let name1 = ["jawad", "hammad"];

// let name2 = name1;

// console.log(name1 == name2)

// ****************************Clusure***************************************

// function outerFun(x) {
//     console.log(x); // 5
    
//     return function innerFun(y) {

//         console.log(y); // 10
        
//         return x + y  
//     }
// }

// let res5 = outerFun(5);

// console.log(res5(10)); // 15


// --========================== forEach ========================

// const arr = [1, 2, 3, 4, 5,6];

// arr.forEach(function(element) {
//     element = element * 2
//     console.log(element)
// });

// console.log(arr);


// -----------for each ma orignal array modify krne ka tarika ------------------

// const arr = [1, 2, 3, 4, 5,6];

// arr.forEach((element, index, array) => {
//   array[index] = element * 2
// })

// console.log(arr);




// const arr = ['apple', 'banana', 'cherry'];
// arr.forEach(function(element, index, array) {
//   console.log(`${index}: ${element} (Full Array: ${array})`);
// });

// --========================== Object.Entries ========================

// let fruits = {
//     apple:300,
//     banana:200,
//     orange:150
// }

// let newFruitsArr = Object.entries(fruits) // ye arrays of arrays bana kr return krta ha...

// console.log(fruits)
// console.log(newFruitsArr)


// --========================== For in Loop ======================== 
// only for object use array ma bhi use hu sakhta ha lekin best practice nh mana jata.. array ke leye for of loop use krrra bhetar ha...

// let obj = {
//     name: "jawad",
//     age : 20,
//     watchType : "digital Watch"
// }
// // console.log(obj["age"]);

// for(let key in obj){
//     console.log( obj[key]);
// }


// --========================== For Of Loop ======================== 

// let arr = [10,20,50,30,80];

// for(let value of arr){
//     console.log(value); // har us chez ma chlta ha jisma indexes huti ha 
// }

// let obj = {
//     apple:200,
//     banana:150,
//     orange:120
// }

// let entriesArr = Object.entries(obj);

// console.log(entriesArr[0])