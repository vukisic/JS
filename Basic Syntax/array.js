//Arrays
let arr1=['Apple','Bannan','Orange','Pineapple'];
let arr2=[1,2,3,4,5,6,7,8,9];
let fibbonacci=[1,1,2,3,5,8,13,21,34,55];

//Methods
var combine=arr1.concat(arr2);
console.log(combine);

console.log(fibbonacci.join(" and "));

console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.push('BlackBerry');
console.log(arr1);

console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift('BlackBerry');
console.log(arr1);

console.log(fibbonacci);
console.log(fibbonacci.reverse());
console.log(arr1.sort());

console.log(arr1.indexOf('Orange'));
console.log(arr1.lastIndexOf('BlackBerry'));

var filtered=fibbonacci.filter((number)=>{return number>30});
console.log(filtered.sort());

fibbonacci.forEach((num)=>{console.log(num)});

console.log(fibbonacci.every((num)=>{num>100}));
console.log(fibbonacci.some((num)=>{num>100})); //At least one element
