//Ex. 5 -> Constructor
function Fruit(name)
{
    this.name=name;
}

var banana=new Fruit('bannaa');
console.log(banana.name);

class Dog
{
    constructor(name)
    {
        this.name=name;
    }
}

var dog=new Dog('Jack');
console.log(dog.name);