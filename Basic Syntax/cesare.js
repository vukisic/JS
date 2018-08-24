function rot13(str) { // LBH QVQ VG!
    let arr=[];
    for(let i=0;i<str.length;i++)
    {
        let code=str.charCodeAt(i);
        if(code>=65 && code<=90)
        {
            var x=code-13;
            if(x<65){
                x=x+26;
            }

            arr.push(String.fromCharCode(x));
        }
        else
        {
            arr.push(str[i]);
        }
    }

    str=arr.join('');
    return str;
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));