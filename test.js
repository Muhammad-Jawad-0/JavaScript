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


const fibonacci = (n) => {
  if(n <= 1){
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5));
