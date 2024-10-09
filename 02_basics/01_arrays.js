let arr1 = [23, 54, 665, 98473, "Loki", "Thor", "Doc. Strange"]

let arr2 = new Array(0, 2, 6, 5) // declearing array with new method

// arr1.push("Doom") // add element in the last of an array

// arr2.pop() // remove the last element of an array

// arr1.unshift("Please Don't use") // add element in the first of an array // BUT NO USE AS IT CONSUMES TIME 

// arr1.shift() // remove the first element of an array

// console.log(arr1.includes(52)); // find if it is there or not

// console.log(arr2.indexOf(0)); // finding the index of any vale present

// console.log(arr2.indexOf(95)); // finding the index of any vale not present

let arr3 = arr2.join() // converts the old array to a string and put it in the new

//slice and splice

let arr4 = [0, 1, 2, 3, 4]

console.log("1", arr4); // checking the result of arr4 after nothing

let arr5 = arr4.slice(1, 3)

console.log(arr5);

console.log("2", arr4); // checking the result of arr4 after slice

let arr6 = arr4.splice(1, 3)

console.log(arr6);

console.log("3", arr4); // checking the result of arr4 after splice


// console.log(arr1); 
// console.log(arr2); 
// console.log(arr3);