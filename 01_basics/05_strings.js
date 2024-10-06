let name = "RDP"
let repository = 1

console.log(`Hello my name is ${name} and I has ${repository} repository.`);


let newString = new String("RDP Loves Js")

console.log(newString.length);
console.log(newString.charAt(5));
console.log(newString.toUpperCase());
console.log(newString.indexOf("L"));
console.log(newString.substring(0,3));
console.log(newString.slice(4,9));

let badEntry = "               Hello..           "
let goodEntry = badEntry.trim()
console.log(badEntry);
console.log(goodEntry);

let wrongUrl = "https://rdp.web/about us"
let rightUrl = wrongUrl.replace(" ", "%20")
console.log(wrongUrl);
console.log(rightUrl);

let includeCheck = "I love my money...."
console.log(includeCheck.includes("money"));

let newString2Array = newString.split(" ")
console.log(newString2Array);

console.table([newString.length, newString.charAt(5), newString.toUpperCase(), newString.indexOf("L"), newString.substring(0,3), newString.slice(4,9), badEntry, goodEntry, wrongUrl, rightUrl, includeCheck.includes("money")]);