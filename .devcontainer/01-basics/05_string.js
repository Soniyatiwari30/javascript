const name = "soni"
const repoCount = 50

//back ticks -> string interpolation (we make placeholders than we inject variables inside it)
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);



const gameName = new String('soni-hhc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)// we does'nt give negative values to substring
console.log(newString);

const anotherString = gameName.slice(-6,4) // in slice we allowed to give negative values
console.log(anotherString);

const newStringOne = "   soni  "
console.log(newStringOne);
console.log(newStringOne.trim()); //it removes extra space in string

const url = "https://soni.com/soni%20tiwari"
console.log(url.replace('%20','-'));

console.log(url.includes('soni'));
console.log(url.includes('soniya'));

console.log(gameName.split('-'));






