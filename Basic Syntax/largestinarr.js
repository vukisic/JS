function largestOfFour(arr) {
    let temp=arr;
    arr=[];
    for(let i=0;i<temp.length;++i)
    {
      let maxnum=temp[i][0];
      for(let j=0;j<temp[i].length;++j)
      {
        if(temp[i][j]>maxnum)
          maxnum=temp[i][j];
      }
      arr.push(maxnum);
    }
    // You can do this!
    return arr;
  }

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));