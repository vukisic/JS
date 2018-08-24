function myReplace(str, before, after) {
    if(before[0]===before[0].toUpperCase())
    {
        var arr=after.split('');
        arr[0]=arr[0].toUpperCase();
        after=arr.join('');
    }

    if(str.includes(before))
    {
        str=str.replace(before,after);
    }

    return str;
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

  function fearNotLetter(str) {

    for(var i = 0; i < str.length; i++) 
    {
      var code = str.charCodeAt(i);
      if (code !== str.charCodeAt(0) + i) 
      {
        return String.fromCharCode(code - 1);
      }  
    }
    return undefined;
  }
  
  fearNotLetter("abce");

  function uniteUnique(arr) {
    var retArr=[];
  
    for(let i=0;i<arguments.length;i++)
    {
      var tempArr=arguments[i];
      console.log(tempArr);
      for(let j=0;j<tempArr.length;j++)
      {
        if(retArr.indexOf(tempArr[j])<0)
        {
          retArr.push(tempArr[j]);
        }
      }
    }
    return retArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));