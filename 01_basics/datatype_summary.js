// permitive 
// types: string, number,boolean,null,undefined,symbol,bigInt

const value = 123;
const name = "rafia";
const booleanvalue = false;

const bigNumber = 12345678901234n
// used symbol the two values are same butt result is false because id are not same 
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

//we also check datatype of all 

//non permitive(reference)
//types: arrays,functions,objects => datatype of all reference is function,objects
 
const heros = ["Imran Khan","iqbal","quaid"]
console.log(heros);

let data = {
    name: "rafia",
    age: 18,
    number: 123
}
console.log(data);


const value12 = function(){
    console.log("hello world!");
    
}

