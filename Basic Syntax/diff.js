function diffArray(arr1, arr2) {
    var newArr = [];
  
    function OnlyFirst(first,second)
    {
      for(let i=0;i<first.length;i++)
      {
        if(second.indexOf(first[i])===-1)
         { 
           newArr.push(first[i]);
         }
      }
    }
    OnlyFirst(arr1,arr2);
    OnlyFirst(arr2,arr1);
  
    // Same, same; but different.
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));