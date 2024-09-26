//primitive datatypes
// 7 types:-
/*string, Number, boolean, Null, undefined, Symbol, BigInt*/
//js is dynamically typed language
const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 345645765762342356n


//refrence type or non-primitive data type:
/* array, objects, functions*/

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"hitesh",
    age: 22,
}

const myFunc = function(){
    console.log("hello world");
}
// myFunc()

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunc);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof anotherId);