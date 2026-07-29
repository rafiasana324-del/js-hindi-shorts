//ARRAYS
const myArr = [0,1,2,3,4,5,6];
console.log(myArr[3]);
const myARR2 = ["true","false"]
console.log(myARR2[1]);
const heros = ["rafia","sobia","zia"]
console.log(heros[2]);
const abc = new Array(2,3,4,6,)
console.log(abc);

// arrays methods
myArr.push(7);
myArr.push(9);
myArr.pop()
console.log(myArr);

myArr.unshift(9);
myArr.shift()
console.log(myArr);
const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);
//console.log(myArr.include(3));
console.log(myArr.indexOf(3));
 
// slice , splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);




