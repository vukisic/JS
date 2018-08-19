var counter=(function()
{
    //Private:
    let count=0;
    function getcount(){return count;}
    function setcount(value){count=value;}
    function incrementCount(){count+=1;}
    function decrementCount(){count-=1;}
    function resetCount(){count=0;}
    //Public:
    return{
        get: getcount,
        set: setcount,
        increment: incrementCount,
        decrement: decrementCount,
        reset:resetCount,
    };
})();

counter.set(5);
console.log(counter.get());
counter.increment();
console.log(counter.get());
counter.reset();
console.log(counter.get());