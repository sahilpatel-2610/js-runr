// let myName = "naresh     "
// let mychannel = "mid     " 

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.naresh = function(){
    console.log(`naresh is present in all objects`);
}

Array.prototype.heyNaresh = function(){
    console.log(`Naresh says hello`);    
}

// heroPower.naresh()
// myHeros.naresh()
// myHeros.heyNaresh()
// heroPower.heyNaresh()


// inheritance

const User = {
    name: "mid",
    email: "mid@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    ___proto__: TeachingSupport
}

Teacher.___proto__ = User

// modern  syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Runrcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"naresh".trueLength()
"iceMid".trueLength()