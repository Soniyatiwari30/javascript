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

const userEmail = []
if (userEmail) {
    console.log("got user email");  
}
else {
    console.log("don't have user email");  
}

if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//falsy values:-
// false, 0, -0, BigInt 0n, "", null, undefined, NAN.

//truthy values:-
// "0", 'false', " ", [], {}, function(){}.