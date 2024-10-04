 let score = "100"
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLogged = true
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 1234
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));


let value = 12
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Legend"
let str2 = "RDP"
let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);