function confirmEnding(str, target) {

    // "Never give up and good luck will find you."
    // -- Falcor
    let temp=parseInt(str.length-target.length);
    return (target==str.substr(temp,target.length));
  }
  
  console.log(confirmEnding("Bastian", "n"));