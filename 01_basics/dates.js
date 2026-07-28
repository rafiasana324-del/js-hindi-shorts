
//date
let myDate = new Date();
console.log(myDate);
 
console.log(myDate.toString());
console.log(myDate.toLocaleString());
//console.log(myDate.todatestring());
console.log(typeof myDate);

let toCreatedate = new Date(2022,1,23)
console.log(toCreatedate);
console.log(toCreatedate.toString());
console.log(toCreatedate.toLocaleString());

let toCreatedate2 = new Date("1-23-2023");
console.log(toCreatedate2);

let toCreatedate3 = new Date(2023,3,23,7,9);
console.log(toCreatedate3.toLocaleString());

//time
let toTimeStamp = Date.now();//to give recently date in mili second
console.log(toTimeStamp);
console.log(toCreatedate.getTime());

console.log(Math.floor(Date.now()/1000));//convert into sec

let MyDate124 = new Date();
console.log(MyDate124.getDate());
console.log(MyDate124.getDay());
console.log(MyDate124.getMonth());//months start from 0 so we use +1
console.log(MyDate124.getTime());
console.log(MyDate124.getFullYear());//so many other functions 
 

