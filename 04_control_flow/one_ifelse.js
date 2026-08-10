//conditions <,>,=<,=>,!=,!==,==,===
const isloggedin =  true;
if(2===2){
    console.log(true);
    
}
/*agher if kay sath true ho ga to program execute ho ga
agher false ho ga to execute ni ho ga*/
const temperature = 42
if(temperature === 40){
    console.log("temperature is less then 50");
}else{
        console.log("greater then 50");
        
    }   
console.log("executed");

const score = 200;
if( score === 200){
    const power = "fly";
    console.log('power: ${power}');
    
}
//other syntax for condition 
const balance = 1000;
if(balance > 500) console.log(true); //without scope in one line 

//nested condition 
if(balance < 500){
    console.log("less then 500");
 } else if (balance < 600) {
    console.log("less then 600");
  } else if( balance < 900){
    console.log("less then 900");

    }
    else {
        console.log("equal to 1000");
        
    }
const loggedin = true;
const debidcard = true;
const loggedinfromgoogle = true;
const loggedinfromemail = false;
if (loggedin && debidcard && 2===2) {
    console.log("user is loggedin");
}
if (loggedinfromgoogle || loggedinfromemail) {
    console.log("user logged");
    
}