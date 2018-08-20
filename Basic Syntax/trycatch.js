//Crazy JS
var a=7*undefined/'String';
console.log(a);
var b=7/0;
console.log(b);

function Whatever()
{
    try
    {
        let obj=undefined;
        console.log(obj.b);
    }
    catch(error)
    {
        console.log("Error!");
    }
    finally
    {
        console.log("Finally!");
    }
    
}

Whatever();

function Calculate(obj)
{
    if(!obj.hasOwnProperty('name'))
    {
        throw new Error("Object does not have property call name");
    }
    else
    {
        obj.name='Vuk';
    }
}

let obj1={
    name:'Niko'
}

let obj2=1;

try {
    Calculate(obj2);
} catch (error) {
    console.log(error.message);
}

try {
    Calculate(obj1);
} catch (error) {
    console.log(error.message);
}