// the global variable
var globalTitle = "Winter Is Coming";
// Add your code below this line
function urlSlug(title) {
  var temp=title.trim();
  var tempstr=temp.toLowerCase();
  var strarr=tempstr.split(/\W/);
  var temparr=strarr.filter((x)=>{return x!=''});
  console.log(temparr);
  var retVal=temparr.join('-');
  return retVal;
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);