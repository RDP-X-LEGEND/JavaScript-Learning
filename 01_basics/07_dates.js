let newDate = new Date()

console.log(newDate); // various function of dates 
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toISOString());
console.log(newDate.toJSON());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleTimeString());

console.log(typeof newDate); // type of date

let personalDate = new Date(2024, 9, 7) // to add just date
console.log(personalDate.toDateString());

let personalDate2 = new Date(2024, 9, 7, 19, 43) // to add time along with date
console.log(personalDate2.toLocaleString());

let personalDate3 = new Date("2024-10-7") // to add in american format [inp => (yyyy, mm, dd)] [out => (mm, dd, yyyy)]
console.log(personalDate3.toLocaleDateString());

let personalDate4 = new Date("7-10-2024") // to add in indian format [(inp = out) => (dd, mm, yyyy)]
console.log(personalDate4.toLocaleDateString());

console.log(personalDate4.getTime()); // convert a given date to milesecond from the 1 january 1970

let nowTime = Date.now() // to add the current time
console.log(nowTime);

console.log(Math.round(nowTime/1000)); // time in sec
console.log(nowTime); // normal time ( millisecond )

let mydate = new Date()
console.log(mydate.toLocaleString('deafult', {
    weekday: "long"
}))
