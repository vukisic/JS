let str1="Do or not to do";
let str2="33,41,51,0,32,11";

function ReverseString(arg)
{
    let tmparr=arg.split("");
    let tmpr=tmparr.reverse();
    let tmpj=tmpr.join("");
    return tmpj;
}

console.log("Hi, Vuk".toUpperCase());

let arr=str2.split(',');
console.log(arr);

let slice=str1.slice(6,10);
console.log(slice);

let sub=str1.substr(6,3);
console.log(sub);

let ends=str1.endsWith("to do");
console.log(ends);

let begi=str1.startsWith("Do");
console.log(begi);

let inc=str1.includes("not");
console.log(inc);

let tempstr="ANA";
let rev=ReverseString(tempstr);
if(rev===tempstr)
    console.log("Same!");
else
    console.log("Not Same!");

let rep='Hi! '.repeat(3);
console.log(rep);

let tri="        hi        ";
console.log(tri.length);
console.log(tri.trim().length);

