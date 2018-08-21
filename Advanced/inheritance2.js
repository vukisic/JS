var Perosn=function(firstName)
{
    this.firstName=firstName;
}

Perosn.prototype.sayHello=function()
{
    conosle.log("Hello, I am "+this.firstName);
}

function Student(firstName,subject)
{
    Perosn.call(this,firstName); //Call parent constructor
    this.subject=subject;
}

Student.prototype=Object.create(Perosn.prototype); //Inheritance
Student.prototype.constructor=Student; //Otherwise it will use Perosn constructor

Student.prototype.sayHello=function()
{
    console.log("Hello, I am "+this.firstName+" ("+this.subject+")");
}

let student1=new Student("Vuk","Applied software engineering");
student1.sayHello();

console.log(student1 instanceof Perosn);
console.log(student1 instanceof Student);

/* function Worker()
{
    let price=100;
    this.getPrice=function(){return price;};
}

var w=new Worker();
console.log(w.price); //Private property!!!
console.log(w.getPrice()); */

class Worker
{
    constructor(n){
        let name=n;
        this.setName=function(name){this.name=name;}
        this.getName=function(){return this.name;}
    }
}

let w=new Worker('Mike');
console.log(w.name);
w.setName('Andy');
console.log(w.getName());