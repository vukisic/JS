let OriginalCar={
    make:"bmw",
    model:"m5",
    year:1997
}

let NewCar=Object.create(OriginalCar);
console.log(NewCar.make); //Lookup for that property

console.log(Object.getPrototypeOf(NewCar));

let myPrototype=Object.getPrototypeOf(NewCar);
console.log(myPrototype.make);

OriginalCar.doors=4;
console.log(NewCar.doors);

console.log(OriginalCar.hasOwnProperty('doors'));
console.log(NewCar.hasOwnProperty('doors'));

NewCar.make="audi"; //Make own property
console.log(NewCar.make);

NewCar.hp=350;
console.log(OriginalCar.hp);//Undefine! 
console.log(NewCar.hp);