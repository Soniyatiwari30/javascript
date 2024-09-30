let a = 300                //global scope

if (true){
    let a = 10              //block scope
    const b = 20
    console.log(`value ${a}`);
    console.log(b);   
}

console.log(a);

