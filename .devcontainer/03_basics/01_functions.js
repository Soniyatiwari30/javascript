
function myName() {
    console.log("s");
    console.log("o");
    console.log("n");
    console.log("i");
    console.log("y");
    console.log("a"); 
}
// myName()


// function addTwoNum(number1,number2){     //values passed inside (parameters) 
//    console.log( number1 + number2);
// }
// const result = addTwoNum(3,5)            //values passed inside (arguments) 
// console.log("result:", result);



function addTwoNum(number1,number2){ 
    // let result = number1 + number2
    // return result
          //or
    return number1 + number2
 }
 const result = addTwoNum(3,5) 
//  console.log("result:", result);


function loginUserMessage(username = "sam"){  //in this we pass default vaulue so that when doest pass argument that it take it from here
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("soniya"));
console.log(loginUserMessage());        //when u dont pass argument it gives undefined




 