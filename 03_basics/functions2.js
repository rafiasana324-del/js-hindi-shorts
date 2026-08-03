 //use rest method same for spread mathod ...rest use for more parameters
 function calculatecartprize(...num1) {
    return num1;
    
}
console.log(calculatecartprize(200,89,700,678));

function calculatecartprize2(val1,val2, ...num1) {
    return num1;
    
}
console.log(calculatecartprize(200,89,700,678));
//objects in functions
const user ={
    username: "rafia",
    prize: 29
}
function userdata(anyobjects) {
    console.log(' this is ${anyobject.username} and the price is ${anyobject.prize}');
}
userdata(user);
/*userdata({
username:"rafia"
prize: 23
})---->also pass direct objects*/
 //array in functions
 const myNewarray = [233,8899,800,688];
 function passarray(getarray) {
    return getarray[3];
    
 }
 console.log(passarray(myNewarray));
 /*passarray([23,567,789])--->also 
 pass direct arrays */
 