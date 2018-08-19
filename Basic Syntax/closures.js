function SayHello(name)
{
    return function()
    {
        console.log("Hi, "+name);
    }
}

let bob=SayHello("Bob");
bob();