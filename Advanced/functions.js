//Ex. 2 -> Functions
let x=5;

//Function
function squareNumber(number)
{
    return Math.pow(number,2);
}

console.log(squareNumber(x));

//IFFE
let y=(function SquareNumber(){
    return Math.pow(x,2);
})();

console.log(y);

//Arrow function
let z=(()=>{
    return Math.pow(x,2);
})();

console.log(z);

//Enclosures
function showName(firstName,lastName)
{
    var intro='Your name is ';
    function makeFullName()
    {
        return intro+firstName+" "+lastName+" !";
    }
    return makeFullName();
}

console.log(showName('Vuk','Isic'));

function showNameRev(firstName)
{
    var intro='Your name is ';
    function makeFullName(lastName)
    {
        console.log(intro+firstName+" "+lastName+" !");
    }
    return makeFullName;
}

var myName=showNameRev('Vuk');
myName('Isic'); //Invoke function

function theLocation()
{
    var city="San Francisco";
    return {
        get: function(){console.log(city);},
        set: function(newCity){city=newCity;}
    }
}

var myPlace=theLocation();
myPlace.get();
myPlace.set('Valjevo');
myPlace.get();

//Anonymous Functions
var myVar=(function(){return 5;})();
console.log(myVar);

var factorial=function(x){
    //arguments.callee -> way to call anonymous func
    return (x>1)?arguments.callee(x-1)*x:1;
}

console.log(factorial(5));