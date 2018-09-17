function telephoneCheck(str) {
    // Good luck!
    var regx=/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;
    return regx.test(str);
    
  }
  
 console.log(telephoneCheck("(275)76227382"));