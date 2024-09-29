let traik = new Date()
// console.log(traik.toString());
// console.log(traik.toDateString());
// console.log(traik.toLocaleString());
// console.log(typeof traik);

let myDate = new Date (2023,0,23)
// console.log(myDate.toDateString());

let myDate1 = new Date (2023,0,23,5,3)
// console.log(myDate1.toLocaleString());
// console.log(myDate1.toDateString());

let myDate2 = new Date ("2023-01-14")
// console.log(myDate2.toLocaleString());

let myDate3 = new Date ("01-14-2023")
// console.log(myDate3.toLocaleString());
// console.log(myDate3.getTime()); //by this method we get output in ms

let myTimeStamp = Date.now() //it gives output in ms(milisec)
// console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000)); //to convert ms into sec that's y we divide this method by 1000 and math.floor to remove decimal

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getMinutes())

// console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`)

newDate.toLocaleString('default',{
    weekday:"long",
})