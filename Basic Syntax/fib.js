function sumFibs(num) {
    var fib=[1,1];
    for(let i=0;i<num;i++)
    {
        let x=fib[i]+fib[i+1]
        fib.push(x);
    }
    fib=fib.filter((x)=>{return x%2==1});
    var sum=0;
    for(let i=0;i<fib.length;i++)
    {
      if(fib[i]<=num)
      {
        sum=sum+fib[i];
      }
      else{
        break;
      }
    }
  
    return sum;
  }
  
 console.log(sumFibs(4));

 function sumPrimes(num) {
    let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 

    let onlyPrimes = arr.filter( (n) => { 
      let m = n-1;
      while (m > 1 && m >= Math.sqrt(n)) { 
        if ((n % m) === 0) 
          return false;
          m--;
      }
        return true;
    });

    return onlyPrimes.reduce((a,b) => a+b); 
  }

 console.log(sumPrimes(10));

 function smallestCommons(arr) {

    arr.sort((a,b)=>{return(a>b)});
    let newArr=[];
    for(let i=arr[0];i<=arr[1];i++)
      newArr.push(i);

    var lcm=newArr[0];
    for(let j=1;j<newArr.length;j++)
    {
      var GCD=gcd(lcm,newArr[j]);
      lcm=(lcm*newArr[j])/GCD;
    }
    return lcm;
    
  
    function gcd(a,b)
    {
      if(b===0)
        return a;
      else
        return gcd(b,a%b);
    }
  
  }
  
  
  console.log(smallestCommons([1,5]));
