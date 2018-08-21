//Ex. 3 -> Exceptions and Errors
function myFunc(a,b)
{
    try {
        if(b==0)
            throw ("Divide by zero!");
        else
            console.log(a/b);
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("Divider!");
    }
}

myFunc(100,10);
console.log("-----------------");
myFunc(100,0);