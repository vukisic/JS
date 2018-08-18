function MyFunction(param)
{
    console.log("----------------");
    console.log(param);
    console.log("----------------");
}

function CalculateTaks(value)
{
    return value*0.2;
}
let counter=0;
function Func()
{
    console.log(++counter);
}

//Var pointing to a function!
let a= MyFunction;
let b=MyFunction;
a("Hello");
b("World!");

var c=CalculateTaks(100);
console.log(c);

//TimeOut
//setTimeout(Func,1000);

function timeout()
{
    setTimeout(Func,2000);
}
timeout();

//IIEF
(function()
{
    console.log("Vuk");
})();