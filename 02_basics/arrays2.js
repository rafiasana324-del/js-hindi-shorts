//more arrays concept 
const marvel_heros = ["superman","batman"]
const ab_heros = ["hitman","gugam"]
marvel_heros.push(ab_heros);
console.log(marvel_heros);
//we also use concat to make value together
const allheros = marvel_heros.concat(ab_heros)
console.log(allheros);
//same work of concat another method mostly used 
const all_new_heros = [...marvel_heros, ...ab_heros];
console.log(all_new_heros);

//flat use for complax arrays
const another_array = [1,2,3,[2,6],6,8,[2,4,[4,7]],9];
const all_another_array = another_array.flat(Infinity);
console.log(all_another_array);

//check is this array and convert 
console.log(Array.isArray("rafia"));
console.log(Array.from("rafia"));
//convert into array
let abc1 = 900
let abc2 = 100
let abc3 = 700
let abc4 = 500
let abc5 = 200
let abc6 = 800
console.log(Array.of(abc1,abc2,abc3,abc4,abc5,abc6));



