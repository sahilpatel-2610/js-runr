// Dates

let myDate = new Date()
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedate = new Date(2025, 06, 9)
// let myCreatedate = new Date(2025, 06, 9, 5, 3)
// let myCreatedate = new Date("2025-06-09")
let myCreatedate = new Date("06-09-2025")
// console.log(myCreatedate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

