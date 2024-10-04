//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const scoreValueStr = "100"

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof scoreValueStr);
console.log(typeof userEmail);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof bigNumber);