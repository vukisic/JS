function spinalCase(str) {
    var regex = /\s+|_+/g; //Select all whitespace chars and '_'
  
    //Replace all 'lowUper' combination with 'low_Uper'
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    return str.replace(regex, '-').toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));