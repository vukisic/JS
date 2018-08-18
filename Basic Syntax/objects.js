let car={
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
};

car.ShowInfo();

let AnotherCar={};
AnotherCar.name="Audi";
delete AnotherCar.name;

let a={
    myProp: {b:"b"}
};

console.log(a.myProp.b);

var c={
    myProp:[
        {d:'this'},
        {e:'can'}
    ]
}

console.log(c.myProp[0].d);


let catlist={
    cars:[
        {Name:"BMW",Model:"M3"},
        {Name:"Audi",Model:"A3"}
    ],

    customers:[
        {Name:"Bob"},
        {Name:"Alice"}
    ]
};

for(var i=0;i<2;++i)
{
    console.log(catlist.customers[i].Name+" : "+catlist.cars[i].Name);
}