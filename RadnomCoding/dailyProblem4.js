/*
Given an array of integers, find the first missing positive integer in linear time and 
    constant space. In other words, find the lowest positive integer that does not exist in
    the array. The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
*/

function NextGreater(arr)
{
    if(arr.length==0)
        return "Empty Array!";
    let tempArray=arr.filter((item,pos)=>{return arr.indexOf(item)==pos});
    tempArray=tempArray.sort((x,y)=>{return x<y?1:-1;});
    let upBoundary=tempArray[0];
    let downBoundary=tempArray[tempArray.length-1];
    let i=tempArray[0];
    
    for(let j=0;j<tempArray.length;j++)
    {
        if(tempArray[j] !== i)
            return i;

        i=i-1;
    }
    return upBoundary+1;
}


let testArr1=[1,2,0];
let testArr2=[3,4,-1,1];
console.log(NextGreater(testArr1));
console.log(NextGreater(testArr2));