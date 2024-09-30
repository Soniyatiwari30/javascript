let a = 300                //global scope

if (true){
    let a = 10              //block scope
    const b = 20
    // console.log(`value ${a}`);
    // console.log(b);   
}
// console.log(a);


function one(){
    const username = "soniya";

    function two(){
        const website = "youtube";
        console.log(username); 
    }
    // console.log(website);  
    //  two()

}
// one()



if (true){
    const username = "soniya"
    if (username === "soniya"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);       //not run bcz print outside scope
    
}
// console.log(username);          //not run bcz print outside scope



//++++++++++++++++interesting++++++++++++//
console.log(addone(5));    //it prints output
function addone(num){
return num + 1
}


console.log(addTwo(5));     //it prints error bcz here we hold function in variable
const addTwo = function(num){
    return num + 2
}
