/*
 Return a new sorted merged list from K sorted lists.
*/

function Swap(a,b)
{
    let temp=a;
    a=b;
    b=temp;
    return [a,b];
}

function MergeSortedLists(arr)
{
    //Unpack
    let retArray=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
            retArray.push(arr[i][j]);
        }
    }

    //Sort Unpacked data
    retArray=retArray.sort((a,b)=>{return a>b?1:-1});
    return retArray;
}

let testArr=[[10,15,30],[12,15,20],[17,20,32,40],[2,5]];
let result=MergeSortedLists(testArr);
console.log(result);