//Arrays->enables storing a collection of multiple items under a single variable
//JavaScript arrays are resizable and can contain 
//a mix of different data types. 
//(When those characteristics are undesirable, use typed arrays instead.)
//JavaScript array-copy operations create shallow copies. 


const myArr = [0,1,2,3,4,5]
const myHeroes = ['shaktiman','naagraj']
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// console.log(myHeroes[0]);
// console.log(myArr2[3]);



//Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) //it shows element on first position 
// myArr.unshift()
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new 
//array object selected from start to end (end not included) where start and end represent the index of items in that array. 
//The original array will not be modified.

//the splice() method of Array instances changes the contents of an array by removing or replacing existing elements 
//and/or adding new elements in place.

//To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). 
//To access part of an array without modifying it, see slice().


console.log('A', myArr);

const myArr1 = myArr.slice(1,3)

console.log(myArr1);
console.log("B", myArr);

const myArr3 = myArr.splice(1,3)
console.log(myArr3);
console.log("C", myArr);








