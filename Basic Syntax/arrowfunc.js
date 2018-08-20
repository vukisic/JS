//Ex. 1
let hi=() => {console.log('Hi')};
hi();

//Ex. 2
let myVar=(name) => {console.log(`Hi ${name}`)};
myVar("Vuk");

//Ex. 3
let add=(a,b) => {return a+b};
console.log(add(7,3));

//Ex. 4
let names=['Vuk','Marko','Niko','Danilo'];
//Itterate throw whole array
names.map((name) => {console.log(`${name}`)});

//Ex. 5
let names1=['Vuk','Marko','Niko','Danilo'];
var transformed=names1.map((name)=>{return `Hi, ${name}!`});
console.log(transformed);