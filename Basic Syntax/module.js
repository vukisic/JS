var counter=(function()
{
    //Private
    let count=0;

    function print(message)
    {
        console.log(message+" ---> "+count);
    }


    //return an object
   return{
       get:function()
       {
          return count;
       },
       set:function(value)
       {
          count=value;
       },
       increment: function()
       {
           count+=1;
       },

       decrement: function()
       {
           count-=1;
       },

       reset: function()
       {
           count=0;
       }
   }
})();

counter.set(5);
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.reset();
console.log(counter.get());