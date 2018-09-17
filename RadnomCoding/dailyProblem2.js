/*

Given an array of integers, return a new array such that each element at index i of the new array
is the product of all the numbers in the original array except the one at i.

*/

function SolveArray(arr)
{
    let retArray=[];
    for(let i=0;i<arr.length;i++)
    {
        let product=1;
        let tempArr=arr.filter(x=>x!=arr[i]);
        tempArr.forEach(x => product *= x);
        retArray.push(product);
    }

    return retArray;
}

let testArr=[1,2,3,4,5];
console.log(testArr);
console.log(SolveArray(testArr));