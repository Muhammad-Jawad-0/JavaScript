// ================= Remove Duplicate Element ==============

// let arr = [2,3,4,2,4,5,6,6,"banana",9,5,3,"banana"];

//                            // 2      0
// let uniqueArr = arr.filter((element,index) => {
//     ///////////////    2 = 0        0 // true
//     return arr.indexOf(element) === index
// })
// //////////[2] <<<<<< ;
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