//Ex. 4 -> OOP
//Object Literals
var myGraes={}; //Empty obj

var collageOOP={
    level:'freshman',
    difficulty:'hard',
    expectedGrade:8,
    ShowName: function()
    {
        console.log('OOP');
    }
}

var collageOP=new Object();
collageOP.level='freshman';
collageOP.ShowInfo=function(){console.log('OP');}

console.log(collageOOP);
console.log(collageOP);
collageOOP.ShowName();


