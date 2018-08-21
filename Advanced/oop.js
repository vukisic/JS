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

//Dot vs Brackets
console.log(collageOOP.level);
console.log(collageOOP['level']);

//Delete
collageOOP.grade=10;
console.log(collageOOP.grade);
delete collageOOP.grade;
console.log(collageOOP.grade);

