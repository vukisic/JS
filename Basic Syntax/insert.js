/* function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a > b;
      });
    
      for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num)
          return a;
      }
    
      return arr.length;
  }
  
 console.log(getIndexToIns([3, 10, 5], 3)); */

 function chunkArrayInGroups(arr, size) {
    // Break it up.
    let temp=[];
    let temparr=arr;
    while(temparr.length>0)
    {
      let at=temparr.slice(0,size);
      temp.push(at);
      temparr=temparr.slice(size,temparr.length);
    }
    
    return temp;;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));