/* let car={
    company:"bmw",
    model:"m5",
    hp:2200,
    price:function()
    {
        return 5000;
    },

    ShowInfo:function()
    {
        console.log(this.company+' '+this.model+' '+this.hp+'hp '+this.price()+'$');
    }
}; */

function first()
{
    return this;
}

console.log(first()===global);

function second()
{
    'use strict';
    return this;
}

console.log(second()===global);
console.log(second()===undefined);

let myObj={value: 'MyObject'};

//value is set to global obj
global.value='Global Object';

function third(name)
{
    return this.value+ " "+name ;
}

console.log(third("Bob"));

//Value pulled from myObj(now this),this keyword will be bound to that obj
console.log(third.call(myObj,"Bob")); 

function PrintInfo()
{
    console.log(this.firstname+" "+this.lastname);
}

var c1={
    firstname: 'Bob',
    lastname: 'Tibor',
    print: PrintInfo
}

var c2={
    firstname: 'Vuk',
    lastname: 'Isic',
    print: PrintInfo
}

c1.print();
c2.print();


