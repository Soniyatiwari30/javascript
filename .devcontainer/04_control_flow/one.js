//if

// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log("hiii");
//  }
// if(3 != 2){
//    console.log("hello world");
// }
// if(2 == "2"){
//     console.log("executed");
//  }
//  if(2 === "2"){
//     console.log("executed");
//  }
//  if(2 === "2"){
//     console.log("executed");
//  }
 
//  const temp = 41
//  if(temp<50){
//     console.log("temprature is less than 50") 
//  }
//  else{
//     console.log("temprature is greater than 50"); 
//  }

//<, >, <=, ==, !=, ===, 

// const score = 200
// if (score>100){
//     let power ="fly"
//     console.log(`user power: ${power}`);  
// }
// console.log(`user power: ${power}`); 



const balance = 1000
// if(balance>500)console.log("test"); 
// if(balance>500)console.log("test"), console.log("test2");   //not good practice don't write like this

// if (balance < 500) {
//     console.log("less than");
// }else if (balance < 750) {
//     console.log("less than 750"); 
// }else if (balance < 900) {
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard  ) {
    console.log("allow to buy courses");
}

if (userLoggedIn && debitCard && loggedInFromGoogle ) {
    console.log("allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
}
