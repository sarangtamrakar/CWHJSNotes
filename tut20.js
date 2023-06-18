console.log("tut20.js");


let myDate = new Date();

console.log(myDate.getMilliseconds());
console.log(myDate.getSeconds());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getDate());
console.log(myDate.getDay());

// month start from 0
console.log(myDate.getMonth());
console.log(myDate.getFullYear());

// epoch in time
console.log(myDate.getTime());


// MM-DD-YYYY MM/DD/YYYY
newDate = new Date("01-26-2024 04:54:08");
console.log(newDate)



newDate.setDate(25);
console.log(newDate);