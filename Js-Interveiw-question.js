// ================= Remove Duplicate Element ==============

// let arr = [2,3,4,2,4,5,6,6,"banana",9,5,3,"banana"];

                           // 2      0
// let uniqueArr = arr.filter((element,index) => {
    ///////////////    2 = 0        0 // true
    // return arr.indexOf(element) === index
// })
//////////[2] <<<<<< ;
//////////[2,3,4,5,6,"banana",9];
// console.log(uniqueArr)

// ==========================================

// let arr = [2, 3, 4, 2, 4, 5, 6, 6, "banana", 9, 5, 3, "banana"];

// let unique = arr.filter((element, index) => {
//   return arr.findIndex((ele) => ele === element) === index;
// });

// let result = arr.indexOf(2) // le loop nh chalata ha
// console.log("result >>", result)

// ===============================================

// let res = arr.findIndex((ele,index) => console.log(ele)) // ye loop chalata ha..

// console.log("res >>>", res)

// console.log(unique);

// let uniqueArr = arr.filter((element,index) => {

//     return console.log(arr.findIndex((ele) => ele === element)=== index)
// })

// //////////[2,3,4,5,6,"banana",9];
// console.log(uniqueArr)

// ================= Fibonacci Series ==============

// const fibonacci = (num) => {
//     let arr = [0,1];

//     for(let i = 2; i < num; i++){
//         arr.push(arr[i - 1] + arr[i - 2]) // indexes ke element ko add kra ha
//     }

//     return arr

// }

// let series = fibonacci(7);

// console.log(series) //[0,1,1,2,3,5,8];

// ================= Reverse String using build In Method ==============

// let string = "Muhammd Jawad";

// let reverseString = string.split("").reverse().join("");

// console.log(reverseString)

// ================= Reverse String with Method ==============

// let string = "Muhammd Jawad"; // l = 13 index = 12
// let reverseStr = ""

// for(let i = string.length - 1; i >= 0; i--){
//     reverseStr += string[i]
// }

// console.log(reverseStr)



// function foo(i) {
//     if (i < 0) {
//       return;
//     }
//     console.log(`begin: ${i}`);
//     foo(i - 1);
//     console.log(`end: ${i}`);
//   }
//   foo(3);







// function counter() {
//     let count = 0;
  
//     return function () {
//       return ++count;
//     };
//   }

//   console.log(counter()())
//   let res = counter();

//   console.log(res())




// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   console.log(multiply(5, "8"));


// function regular() {
//     console.log(this)
// }

// regular()

// const arrow = () => {
//     console.log(this)
// }
// arrow()


// const obj = {
//     name: "Ali",
//     showName: function () {
//       const arrowFunc = () => {
//         console.log(this.name); // ✅ `this` lexical scope se aayega
//       };
//       arrowFunc();
//     }
//   };



// function name(params) {
//     let merraNaam = "Jawad"

//      const naam = () =>  this.merraNaam

//      return naam
// }

// let a =  name()
// console.log(a)


// function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       console.log(this.age++); // `this` properly refers to the person object
//     }, 1000);

//   }
  
//   const p = new Person();



// function Person() {
//     // Some choose `that` instead of `self`.
//     // Choose one and be consistent.
//     const self = this;
//     self.age = 0;
  
//     setInterval(function growUp() {
//       // The callback refers to the `self` variable of which
//       // the value is the expected object.
//       console.log(self.age++);
//     }, 1000);
//   }
// Person()