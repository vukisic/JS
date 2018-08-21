//Ex. 1 -> Variables
var color='blue';
if(color)
{
    var color='red'; //No block var , just global var!
    console.log(color);
}
console.log(color);

function printColor()
{
    var color='black'; //Local to the function!
    console.log(color);
}
printColor();
console.log(color);