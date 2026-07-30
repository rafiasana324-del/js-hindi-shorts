// singleton concept---> singleton hamesha construct object say bnta hay literal object say kabhi ni bnta 
  

// symbol create 
const mySmb = Symbol("key1");
//imp  for interviews how to symbol usd in object correct concept 
// simple object create 
const myObj = {
    name: "rafia",
    [mySmb]:"key12",
    age : 18,
    gmail: "rafiasna@google.com",
    location: "lahore",
}
//how to access objects 
console.log(myObj.age);
console.log(myObj["name"]);
console.log(myObj);

myObj.name = "zia";
console.log(myObj.name);
Object.freeze(myObj);// freeze krnay kay baad app koi bhi chaning karain gan woh cheez change ni ho ge 
myObj.name = "sami";
console.log(myObj.name);

myObj.greeting = function(){
    console.log("hi js user");
    
}
console.log(myObj.greeting());

myObj.greetingtwo = function(){
    console.log('hi js user , ${this.name}');
    
}
console.log(myObj.greetingtwo());

