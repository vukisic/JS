let a,b,c,d;

let arr=['bob','vuk','niko','susan'];

//destructuring
[a,b,c,d]=arr;
console.log(a);
console.log(b);

let others;
[a,b, ...others]=arr;
console.log(a);
console.log(b);
console.log(others);

let year,model;

({year,model}={
    make:'bmw',
    model:'m5',
    year:1997
});

console.log(year);
console.log(model);
