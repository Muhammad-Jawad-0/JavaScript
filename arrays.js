///// ============================= SLICE

// let arr = [1,9,10,15,20, 30,50];

// arr.push(100);      // last add 
// arr.pop()           // last delete
// arr.unshift("jawad")  // first add
// arr.shift()        // first delete

// let sliceArr = arr.slice(0,4);   // <<<<<<  new array return krta ha or array slice krta ha or ye 2 argument leta ha phela jaha se slice start krna ha or dusra jaha tk slice krna ha magr last index jo huga wo include nh huta ussy ik pheele tk array slice krta ha;


// let nagetiveSliceArr = arr.slice(-6,-3) // -1 last element -2 second Last -3 third last  <<< isko -0 nh de sakhte

// console.log("orignal Arr >>>",arr);
// console.log("sliceArr >>", sliceArr);
// console.log("nagetiveSliceArr >>", nagetiveSliceArr);

// ========================== SPLICE  >>> ADD , REMOVE, REPLACE

// let fruits = ['apple', 'banana', 'cherry', 'orange', 'Mango']

// let removeFruits = fruits.splice(1,3)

// console.log(removeFruits, "<<<< removeFruits");

// const addGraps = fruits.splice(3,0,"graps") // 3 index ma jao: 0 chez dlete kro matlb kch delete nh kro : "graps" ko 3 index ma add krdo;; thats at
 

// const addGrapsAndRemoveSomeThing = fruits.splice(2,2, "graps") // 2: 2 index ma jao : 2: 2 element delete krdo : "graps": 2 index ma graps ko add krdo 


// console.log(fruits , "<<<< fruits");
// console.log("addGrapsAndRemoveSomeThing >>", addGrapsAndRemoveSomeThing); // ['cherry', 'orange']


// console.log("addGraps >>>", addGraps); // empty array aega because kch remove nh hua

// let strFruits = fruits.join(" ");

// console.log(strFruits);


// array ko string ma convert krne ke leye .join(" ") ka use krte ha.
// string ko array ma convert krne ke leye .split(" ") ka use krte ha.



// let arr = [1, 2, 3, 4];

// arr.forEach((item) => {
//   console.log(item * 2);  // Ye sirf output show karega, koi return nahi hoga
// });

// let newArr = arr.map((item) => item * 2);
// console.log(newArr);

// let arr = [{ name: 'John', age: 25 },{ name: 'Jane', age: 30 },{ name: 'Jim', age: 25 }];


//   let goodBy = arr.reduce((acc, curr) => {
//     if(!acc[curr.age]){
//         acc[curr.age] = []
//     }

//     acc[curr.age].push(curr)

//     return acc
//   }, {})

//   console.log(goodBy);
  
// let arr = [{ name: 'John', age: 25 },{ name: 'Kamil',  },{ name: 'Jane', age: 30 },{ name: 'Jim', age: 25 },{ name: 'jawad', age: 21 }];

// let res = arr.reduce((acc,curr) => {
//     if(!acc[curr.age]){
//         acc[curr.age] = []
//     }

//     acc[curr.age].push(curr)

//     return acc
// },{})

// console.log(res);

///// ============================= Destructure;




