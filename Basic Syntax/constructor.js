function Car(make,model,year)
{
    this.make=make;
    this.model=model;
    this.year=year;
}

let car1=new Car("bmw","m5",1997); //New create empty obj, and use Car function as constructor
console.log(car1);

class Phone
{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    get()
    {
        return this.make+" "+this.model+" "+this.year;
    }

    set(make,model,yera)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }
}

let p1=new Phone("Samsung","S9",2018);
console.log(p1.get());