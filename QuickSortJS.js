function QuickSort(arr,order)
{
    QuickSortStep(arr,0,arr.length-1,order);
}


function QuickSortStep(arr,s,e,order)
{
    if(s<e)
    {
        let q=Partition(arr,s,e,order);
        QuickSortStep(arr,s,q-1,order);
        QuickSortStep(arr,q+1,e,order);
    }
}


function Partition(arr,s,e,order)
{
    if (order)
    {
        let x=arr[e];
        let i=s-1;
        for(let j=s;j<e;j++)
        {
            if(arr[j]<=x)
            {
                i++;
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }

        let tmp=arr[i+1];
        arr[i+1]=arr[e];
        arr[e]=tmp;

        return i+1;
    }
    else
    {
        let x=arr[e];
        let i=s-1;
        for(let j=s;j<e;j++)
        {
            if(arr[j]>x)
            {
                i++;
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }

        let tmp=arr[i+1];
        arr[i+1]=arr[e];
        arr[e]=tmp;

        return i+1;
    }
    

}

testArr=[0,9,-22,7,30,-15,9,5,1,2];
QuickSort(testArr,false);
console.log(testArr);
