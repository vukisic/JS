function translatePigLatin(str) {
    function IsVowel(st)
    {
      if(st=='a' || st=='e' || st=='i' || st=='o' || st=='u')
        return true;
      else
        return false;
    }
  
    var newStr;
    if(IsVowel(str[0]))
      newStr=str+'way';
    else
    {
      var arr=[];
      let i=0;
      var strarr=str.split('');
      while(i!=str.length)
      {
        if(IsVowel(strarr[i]))
        {
          break;
        }
        else
        {
          arr.push(str[i]);
          strarr[i]=' ';
        }
        i++;
      }
      console.log('arr: '+arr);
      console.log('strarr: '+strarr);
      var x=strarr.join('').trim();
      var y=arr.join('');
      newStr=x+y+'ay';
    }
    return newStr;
  }
  
  console.log(translatePigLatin("california"));