let arr1 = ["Loki", "Thor", "Doc. Strange"]

let arr2 = ["Superman", "Batman", "Flash"]

arr1.push(arr2) // adds an array as an element when use push

console.log(arr1[3][0]); // accessing data of an array inside a array

let arr3 = arr1.concat(arr2) // merges two array 

let arr4 = [...arr1, ...arr2] // spread out multiple array and show each element in a single array ( output same as concat )

let arr5 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let arr6 = arr5.flat(Infinity) // if in a array there is another arrray it makes a single array

console.log(arr1);
console.log(arr3);
console.log(arr4);
console.log(arr6);

console.log(Array.isArray("RDP")) // checking is something a array

console.log(Array.from("RDP King")) // converting a string to a array and make each letter an array

console.log(Array.from({name: "RDP"})) // output => empty array as we ahven't told it what to store ("key" or "value")

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // converting to array

console.log(Array.of("RDP loves code", "Legends")); // converting a string to an array ame the whole an element use comma to make different element