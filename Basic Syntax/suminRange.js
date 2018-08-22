function sumAll(arr) {
    var sum=0;
    var a,b;
    [a,b]=arr;
    if(a>b)
    {
        var temp=a;
        a=b;
        b=temp;
    }
    for(let i=a;i<=b;++i)
    {
        sum=sum+i;
    }
    return sum;
  }
  
  console.log(sumAll([4, 1]));