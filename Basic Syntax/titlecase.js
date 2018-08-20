function titleCase(str) {
    let temp=str.split(' ');
    for(let i=0;i<temp.length;i++)
    {
      let temp1=temp[i].split('');
      temp1[0]=temp1[0].toUpperCase();
      for(let j=1;j<temp1.length;j++)
        temp1[j]=temp1[j].toLowerCase();
      temp[i]=temp1.join('');
    }
    str=temp.join(' ');
    return str;
  }
  
  console.log(titleCase("I'm a liTtle tea pot"));