/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
*/

function DoesSumIsK(arr,k)
{
    let tempArr=arr.filter(x=>x<k);
    for(let i=0;i<tempArr.length;i++)
    {
        for(let j=i;j<tempArr.length;j++)
        {
            if(tempArr[i]+tempArr[j]===k)
                return true;
        }
    }
    return false;
}

let testArr=[10,3,5,7,19,20,18];
console.log(DoesSumIsK(testArr,17));
let test2Arr=[3,4,1,9,5];
console.log(DoesSumIsK(test2Arr,17));