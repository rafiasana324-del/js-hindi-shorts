// stack memory => permitive
// in stack memory we give copy of value  

let myvalue = "rafia1234"
let myvalue2 = myvalue;
myvalue2 = "rafia890"
console.log(myvalue);
console.log(myvalue2);

// heap memory => non permitive 
// in heap memory we give the original reference ... also change original reference
let value3 ={
    name: "rafi",
    age: 23
}
console.log(value3);

