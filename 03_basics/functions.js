// functions 
//syntax of functions 
function myname() {
    console.log("R");
    console.log("A");
    console.log("F");
    console.log("I");
    console.log("A");
} 
myname(); //calling of functions 
//during calling we pass arguments ...during fun name we pass parameters
function addnum(num1,num2) {
    console.log(num1 + num2);
    
}
addnum(3,5)
//store in one variable then syntax of functions
function sumnum(number1,number2) {
    let result = number1 + number2;
    return result;
    // if we use return then after we don't use console.log
    //we also use simple way ....>return num1 + num2
}
const result = sumnum(3,7);
console.log( "result:", result);
//other ways to give parameters
function userloginmsg(username) {
    return '${username} you just loggedin'
    
}//we also pass a by default value as a parameter username ="zia"
console.log(userloginmsg("rafia"));

function userlogin(user) {
    if (user === undefined) {
        console.log("please enter a username");
        return
    }
    return '${user} you just loggedin'
    
}
console.log(userlogin());
