// NUMBERS 
 const score = 100;
console.log(score);

const balance = new Number(200);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
 
const anothervalue = 923.89
console.log(anothervalue.toPrecision(3));
console.log(anothervalue);
 
const value2 = 1000000;
console.log(value2.toLocaleString());
//console.log(value2.toLocaleString('en_IN'));

// MATHS 
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.7));
console.log(Math.ceil(5.6));
console.log(Math.floor(8.9));
console.log(Math.min(3,5,7,8));
console.log(Math.max(3,5,7,8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min)) + min);

