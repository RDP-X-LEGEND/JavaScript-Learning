let score = 777
console.log(score);

let numScore = new Number(777)
console.log(numScore);

let oneNum = 1210.9270
console.log(oneNum.toString().length);
console.log(oneNum.toFixed(2));
console.log(oneNum.toPrecision(5));

let largeNum = 100000
console.log(largeNum.toLocaleString('en-IN'));
console.log(largeNum.toLocaleString());


console.table([score, oneNum.toString().length, oneNum.toFixed(2), oneNum.toPrecision(5), largeNum.toLocaleString(), largeNum.toLocaleString('en-IN')])


// MATHS


console.log(Math);

let absTest = -1210
console.log(Math.abs(absTest));

let roundTest = 12.76585
console.log(Math.round(roundTest));

let ceilTest = 10.1
console.log(Math.ceil(ceilTest));

let floorTest = 19.9
console.log(Math.floor(floorTest));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.round((Math.random() * 10) + 1));

let max = 6
let min = 1
console.log(Math.round(Math.random() * (max - min)) + min);


console.table([Math.abs(absTest), Math.round(roundTest), Math.ceil(ceilTest), Math.floor(floorTest), Math.max(5, 8, 9, 1, 2), Math.min(5, 8, 9, 1, 2), Math.round(Math.random() * (max - min)) + min])