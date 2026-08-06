// immediatly invoked function expression ---->syntax 
//()()

(function one(){
    console.log('DB Connected');
    
})(); // this is named IIfE

( (name) => {
    console.log('DB CONNECT TWO , ${name}');
    
})("rafia");// This is without named IIfE
// arrow function may bhi IIfe use kr skatya han 
// argument pass bhi kr skatya han 