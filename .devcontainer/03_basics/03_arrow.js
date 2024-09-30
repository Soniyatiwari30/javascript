const user = {
    username: "soni",
    peice: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  //this ->refers to current context
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);  //it does'nt print bcz it call outside


// function chai(){
//     let username ="soni"
//     console.log(this);            //it print directories
//     console.log(this.username);    // it print undefined bcz this.username works in object only
    
// }
// chai()


// const chai = function (){
//      let username ="soni"
//      console.log(this.username);
// }
// chai()

const chai = () =>{
    let username ="soni"
    //  console.log(this.username); 
    console.log(this);
      
}
// chai()


// const addTwo = (num1 , num2) => { 
// return num1 + num2              //when we used {} than return keyword must written
// }
// console.log(addTwo(3,4));


// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(3,4));


// const addTwo = (num1 , num2) => (num1 + num2)  //when we use() than its not required to write return
// console.log(addTwo(3,4));


const addTwo = (num1 , num2) => ({username:"soniya" })     //for object also we wrap in ()
console.log(addTwo());


// const myArr = [2,4,5,7,8]
// myArr.forEach()