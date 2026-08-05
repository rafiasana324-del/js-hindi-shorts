const a = 10;
let b = 90;
var c = 100;
console.log(a);
console.log(b);
console.log(c); // its simple not craete problem var 
/*lakin jabh kisi condition may kisi loop may function may
scope {} may var use krtay to woh {} say bahir bhi access 
ho skata isliy var ko use ni kiya jata */
if (true) {
    const a = 9;
let b = 7;
var c = 88;
    
}
console.log(a);
console.log(b);
console.log(c); /*ismay var ho gaya acces baki dono ni howa */
//scope in nested functions
function one(abc) {
    const name = "rafia"
      function two(def) {
        const age = 19;
        console.log(name);
      }  

      two();  
}

one();/*nested loop parent loop ke cheezo ko aacess kr skat hay 
magar parent ni use kr skata */
 
// scope in nested loop 
if (true) {
    const name = "rafia";
    if (name === "rafia") {
        const user = " zia";
        console.log(name + zia);
    }
    
}/*jo aik scope shuru kiya us kay ander he app woh 
cheezay acces kr skaty han uskay bahir ni jsut child scope 
parent scope ke kr skatya*/
function addone(num) {
    return num + 1;
    
}
console.log(addone(5));/* is walay ko hum function say uper 
kahin bhi console.log kr skty hna*/

const addtwo = function (num) { /* is walay ko hum ni kr skaty 
    kahin access qu kay yah aik axpresiiion hay yah just 
    function kay baad he access ho ga */
    return num + 2;
    
}
console.log(addone(5));


