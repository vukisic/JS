function printHistogram(title,char,arr){
    console.log("Histogram: "+title+"\n");
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i].name+" : "+char.repeat(arr[i].value)+"\n");
    }
}

function generateRandomArray(first,last,count)
{
    let arr=[];
    for(let i=0;i<count;i++){
        arr.push(Math.floor(Math.random()*last)+first);
    }
    return arr;
}

function populateObjectArray(first,last,targetArr)
{
    let arr=[];
    for(let i=first;i<=last;i++){
        arr.push({name:i,value:targetArr.filter((x)=>x===i).length});
    }
    return arr;
}


let tempArr=generateRandomArray(1,5,10);
let objArr=populateObjectArray(1,5,tempArr);
console.log("Array:"+tempArr);
printHistogram("Value Number","=",objArr);