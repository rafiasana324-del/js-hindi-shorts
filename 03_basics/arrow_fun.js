const user = {
    username: "rafia",
    prize: 999,
    welcomeMessage: function() {
        console.log('${this.username}, welcome to website');
        console.log(this);/*jabh idhr this dan gan toh yah 
        sara data dekhaye ga */
        
    }
}
user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();
/*consol.log(this)....jabh idhr this likhay gan to 
empty parathies day ga */
function one() {
    let username = "rafia"
    console.log(this.username);
}
one(); /* is fun ko run kr kay dekha to this nay work ni kiya 
thats mean kay this sirf objects may kaam krta hay fun may ni*/

// arrow function syntax
const arrow = () => {
    let user = "zia"
    console.log(user);
    
}
arrow()
//more arrow fun concept 
const addnum = (num1, num2) => {
     return num1 + num2;
}
console.log(addnum(6,8));

const sum = (num1,num2) => num1 + num2
console.log(sum(6,4)); /*agher {} ni use krnay to return 
bhi use ni krna*/

const mul = (num1,num2) => (num1 * num2)
console.log(mul(5,4));

const name = () => ({username:"rafia"})
console.log(name());
