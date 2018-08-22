// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  newArray=this.slice();
  for(let i=0;i<newArray.length;i++)
  {
      if(!callback(newArray[i]))
      {
          newArray.splice(i,1);
      }
  }

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s);
  