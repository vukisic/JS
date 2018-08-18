//Array
let numbers=[1,2,3,4,5];
let strings=["Me","Myself","I"];
let random=["Me",1,"MySelf",2,"I",3];

console.log(random[0]);
console.log(random[1]);
//Print all elements!
console.log(random);
console.log(random.length);

//Not SAFE way numbers[8]=10;
//Safe Way
numbers.push(10);
console.log(numbers);
console.log(numbers.length);
numbers.pop();
console.log(numbers);
console.log(numbers.length);

