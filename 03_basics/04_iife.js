// Immediately Invoked Function Expressions (IIFE)


(function maa(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('naresh')