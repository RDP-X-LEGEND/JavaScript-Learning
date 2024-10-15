let mySym = Symbol("hello")

let user1 = {
    name: "RDP",
    "full name": "Rajdeep Pal",
    age: 14,
    location: "West Bengal",
    email: "rajdeeppal0000.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "ni6e"
}

// console.log(user1.email); // 1 way of accessing objects

// console.log(user1["email"]); // another way of accessing objects

// console.log(user1["full name"]); // this cannot be accessed with ' . ' function

// console.log(user1[mySym]); // printing the symbol

user1.name = "Rajdeep" // changing a value in object

// Object.freeze(user1) // freezing an object

// user1.age = 1965 // changing an object after freezing

// user1.name = "R D P" // changing an object after freezing

// console.log(user1);

user1.greeting = function(){
    console.log("Lovely Code");
}

user1.greeting2 = function(){
    console.log(`Lovely Code by ${this.name}`);
}

console.log(user1.greeting());
console.log(user1.greeting2());