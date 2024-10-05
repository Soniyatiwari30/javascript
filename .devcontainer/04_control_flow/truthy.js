//falsy values:-
// false, 0, -0, BigInt 0n, "", null, undefined, NAN.

//truthy values:-
// "0", 'false', " ", [], {}, function(){}.



// const userEmail = "soni@gmail.com"
// if (userEmail) {
//     console.log("got user email");  
// }
// else {
//     console.log("don't have user email");  
// }


// const userEmail = ""
// if (userEmail) {
//     console.log("got user email");  
// }
// else {
//     console.log("don't have user email");  
// }

// const userEmail = []
// if (userEmail) {
//     console.log("got user email");  
// }
// else {
//     console.log("don't have user email");  
// }

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }




// Nullish Coalescing Operator (??):-  null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 13 ?? 20

// console.log(val1);



// Terniary operaor :- 
// conditions ? true : false

const iceTea = 100
iceTea <=80 ? console.log("less than 80") : console.log("more than 80");

