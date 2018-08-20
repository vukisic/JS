class Car
{
    constructor(make,model,year)
    {
        this.make=make;
        this.model=model;
        this.year=year;
    }

    print(){
        console.log(this.make +" "+this.model+" ("+this.year+")");
    }
}

class SportCar extends Car
{
    sound(){
        console.log("Wrooooommmm!");
    }
}


let myCar=new Car("Audi","Q7",2018);
myCar.print();

let mySportCar=new SportCar("Ferarri","E70","2010");
mySportCar.print();
mySportCar.sound();