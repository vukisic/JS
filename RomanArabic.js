function Convert(num)
{
    let arr=[];
    let t=parseInt(num/1000);
    let h=parseInt((num%1000)/100);
    let d=parseInt((num%1000%100)/10);
    let j=parseInt((num%1000%100%10));

    console.log(t);
    console.log(h);
    console.log(d);
    console.log(j);

    //T
    let st="";
    switch(t)
    {
        case 0:break;
        case 1:st="M";break;
        case 2:st="MM";break;
        case 3:st="MMM";break;
        case 4:break;
        case 5:break;
        case 6:break;
        case 7:break;
        case 8:break;
        case 9:break;
    }
    arr.push(st);

    //H
    let sh="";
    switch(h)
    {
        case 0:break;
        case 1:sh="C";break;
        case 2:sh="CC";break;
        case 3:sh="CCC";break;
        case 4:sh="CD";break;
        case 5:sh="D";break;
        case 6:sh="DC";break;
        case 7:sh="DCC";break;
        case 8:sh="DCCC";break;
        case 9:sh="CM";break;
    }
    arr.push(sh);

    //D
    let sd="";
    switch(d)
    {
        case 0:break;
        case 1:sd="X";break;
        case 2:sd="XX";break;
        case 3:sd="XXX";break;
        case 4:sd="XL";break;
        case 5:sd="L";break;
        case 6:sd="LX";break;
        case 7:sd="LXX";break;
        case 8:sd="LXXX";break;
        case 9:sd="XC";break;
    }
    arr.push(sd);

    //D
    let sj="";
    switch(j)
    {
        case 0:break;
        case 1:sj="I";break;
        case 2:sj="II";break;
        case 3:sj="III";break;
        case 4:sj="IV";break;
        case 5:sj="V";break;
        case 6:sj="VI";break;
        case 7:sj="VII";break;
        case 8:sj="VIII";break;
        case 9:sj="IX";break;
    }
    arr.push(sj);



    let str=arr.join('');
    return str;
}


console.log(Convert(3999));