/* let name='bob';
console.log(`hi ${name}`);

let sentance=`
            My style is unique and random. 
            But I think it's important 
            that it still makes sense.`;

console.log(sentance); */

function GetCount(){return 1;}

let interpolation=`Give me ${GetCount()==1?' one good ':' more '} reason!`;
console.log(interpolation);