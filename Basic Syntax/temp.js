function destroyer(arr) {
    var args=Array.prototype.slice.call(arguments).slice(1);
    var newArr=[];

    for(let i=0;i<arr.length;i++)
    {
        var condition=true;
        for(let j=0;j<args.length;j++)
        {
            if(arr[i]===args[j])
                condition=false;
        }
        if(condition)
            newArr.push(arr[i]);
    }

    return newArr;
  }
  
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));