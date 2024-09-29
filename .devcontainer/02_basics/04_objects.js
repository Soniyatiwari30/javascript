const tinder = new Object()
// console.log(tinder);

const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const user = {
    email:"sam@gmail.com",
    fullname:{
        username:{
            firstname:"soni",
            lastname:"tiwari"
        }
    }
}
// console.log(user);
// console.log(user.fullname);
// console.log(user.fullname.username);
// console.log(user.fullname.username.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a" ,6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2,obj4) //Object.assign ->The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id:1,
        email:"abc@.com"
    },
    {
        id:1,
        email:"abc@.com"
    },
    {
    id:1,
    email:"abc@.com"
    },
    {
    id:1,
    email:"abc@.com"
    }
]
// console.log(users[1].email)


console.log(tinderUser);
console.log(Object.keys(tinderUser));  //it gives all keys
console.log(Object.values(tinderUser)); //it gives all values of respective keys
console.log(Object.entries(tinderUser)); //it gives key value pair in array form ,we rarely use it 
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to search whether obj has that particular property or not
console.log(tinderUser.hasOwnProperty("islogg"));





