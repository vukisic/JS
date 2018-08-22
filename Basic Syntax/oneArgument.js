function addNumbers(x)
{
    return function(y)
    {
        return function(z)
        {
            return x+y+z;
        }
    }
}

console.log(addNumbers(1)(2)(3));