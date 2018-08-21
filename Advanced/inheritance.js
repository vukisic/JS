//Ex. 6 -> Inheritance
var fruit=function(){
    this.type='Fruit';
}

fruit.prototype.print=function(){
    console.log(this.type);
}

var apple=new fruit();
apple.print();

fruit.prototype.color='SomeColor';
apple.color='Green';

console.log(apple.color);
