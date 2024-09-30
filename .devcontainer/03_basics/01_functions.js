
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


function loginUserMessage(username = "sam"){       //in this we pass default vaulue so that when doest pass argument that it take it from here
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("soniya"));
// console.log(loginUserMessage());           //when u dont pass argument it gives undefined



function claculateCartPrice(...num1){      //...rest operator it tales many arguments in arrray form 
return num1
}
// console.log(claculateCartPrice(200, 400, 500, 2000));



function claculateCartPrice1(val1,val2,...num1){
    return num1
    }
//  console.log(claculateCartPrice1(200, 400, 500, 2000));



const user = {
    username1: "soni",
    price: 100
}

function handleObject(anyobject) {
console.log(`username is ${anyobject.username1} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username1:"sam",
    price:1000
})

const myArr = [200, 400, 100, 500]

function returnSecondValue(getArray){
 return getArray[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 400, 100, 500]));
