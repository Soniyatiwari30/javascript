// objects  -> we can declare objects by two way literals and constructors(singleton)
//singleton -> object.create


//object literals

const mySym = Symbol("key1") //declaration of symbol

const Jsuser = {
    name:"soni",
    "full name":"soniya tiwari",
    [mySym]: "mykey1", //how to write symbol in key value form
    age:30,
    location:"agra",
    email: "soni@.com",
    isLoggedIn: false,
    lastLoginDays: ["monaday","saturday"]
}
// console.log( Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email="sonitiwari@gmail.com"
// Object.freeze(Jsuser) //here after use this method we cant cgange the value of particular key
Jsuser.email="tiwarisoni@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
    
}
Jsuser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());




