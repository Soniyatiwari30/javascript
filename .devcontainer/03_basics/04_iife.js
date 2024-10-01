// Immediately Invoked Function Expression (IIFE)


(function chai(){                //we put function inside() bcz global variables does'nt pollute them and execute that particular function immediately
    console.log(`DB CONNECTED`);
})();                             //for iife we put() to execute function or execution call
                                //when we use iife than after execution we put; so that iife function ends there

((name) => {
    console.log(`DB CONNECTED two ${name}`);
})('soni')