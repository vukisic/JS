//DO NOT USE
/*var MyVar="Hi,i am Var";
function MyFunction()
{
    console.log("Function");
}*/

function one()
{
    console.log("ONE");
}

let a=one;
console.log(typeof a);

a();

function two()
{
    return function ()
    {
        console.log("TWO");
    }
}

let x=two();
x();

function three()
{
    return function()
    {
        return 'three';
    }
}

console.log(three()());