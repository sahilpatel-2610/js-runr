// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 9725341858722781n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["dr.doom", "thor", "loki"]
let myObj = {
    name: "naresh",
    age: 26,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3
