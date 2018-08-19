let pattern=/xyz/;
let value1="this is a xyz text!";
let value2="this is not a text"

console.log(pattern.test(value1));
console.log(pattern.test(value2));

console.log(value1.replace(pattern,'just'));
console.log(value1.match(pattern));
