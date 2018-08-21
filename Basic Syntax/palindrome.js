function myFunction(value, index, array) {
  return value.toLowerCase();
}

function palindrome(str) {
    str=str.trim();
    let alphabetRegexV2 = /\w/g;
    let result = str.match(alphabetRegexV2);
    let tmp=result;
    result=[];
    for(i = 0;i<tmp.length;i++)
    {
      if(tmp[i]!='_')
        result.push(tmp[i]);
    }
    result=result.map(myFunction);
    let first=result.join(''); 
    let temp=first;
    
    let secArr=temp.split('');
    let secArrRev=secArr.reverse();
    let second=secArrRev.join('');
    
    if(first===second)
      return true;
    else
      return false;
  }
  
  
  
  console.log(palindrome("_eye"));