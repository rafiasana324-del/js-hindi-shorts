 // singleton (constructor objects)
 //const user = new objects() -----> syntax 
 
 const user = {}
user.id = "123";
user.name = "rafia"
user.email = "rafia@google.com"
console.log(user);

const jsuser ={
    email: "rafiasana@google.com",
    fullname:{
        fullusername:{
            firstname:"rafia",
            lastname:"sana"
        }
    },
    age: 18,
    work: "study"

}
console.log(jsuser.fullname.fullusername);
console.log(jsuser);

 // how to combine objects 
const obj1 = {a: "78",b:"890"}
const obj2 = {c: "456",d:"89"}
const obj3 = {e: "100",f:"190"}
const obj5 ={obj1,obj2} //not good way 
console.log(obj5);
const obj4 = Object.assign({},obj1,obj2,obj3) 
console.log(obj4);

// spread operations same for arrays 
const obj6 ={...obj1,...obj2,...obj3}
console.log(obj6);

//other main concept 
console.log(Object.keys(jsuser));
console.log(Object.values(jsuser));
console.log(Object.entries(jsuser));
console.log(Object.hasOwn("email"));
  
//sometime also objects in arrays 
const user2 =[
    {
        name:"rafia"
    },
    {
         age:17
    },
    {
         email:"h@gmail.com"
    }
]
console.log(user2[2]);