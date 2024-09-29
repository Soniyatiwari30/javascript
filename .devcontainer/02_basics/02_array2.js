const marvelHeroes = ['thor',"ironman", "spiderman", ]
const dc = ["superman","flash", "batman", ]
 
// marvelHeroes.push(dc);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const hero = marvelHeroes.concat(dc) //combines two or more arrays and return new array
// console.log(hero);


//spread ->The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments 
//(for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of
// an object and adds the key-value pairs to the object being created.

const newHero = [...marvelHeroes,...dc] //spread operator same work like concat
// console.log(newHero);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //here we join array to infinity depth
const usableArr = anotherArr.flat(Infinity)
// console.log(usableArr);

console.log( Array.isArray("soni"));
console.log( Array.from("soni"));
console.log( Array.from({name:"soni"}));

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));


//isArray() ->The Array.isArray() static method determines whether the passed value is an Array.
//from() ->The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
//Array.of() ->The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

