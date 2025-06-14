function multipleBy5(num){
    this.num = num
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); 
}

const mid = new createUser("mid", 25)
const night = createUser("night", 250)

mid.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the crection of a new Jvascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructer function. This means that it has access to properties and methods defined on the constructer's prototype.

The constructer is called: The constructer function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructer, Javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructer function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/