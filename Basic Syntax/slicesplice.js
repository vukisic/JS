function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let temp=arr2.slice(n,arr2.length);
    arr2.splice(n,arr2.length-n,...arr1);
    arr2.push(...temp);
    return arr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5,6], 1));