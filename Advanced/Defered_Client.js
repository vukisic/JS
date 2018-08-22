function processMessage(message)
{
    var deferred=$.Deferred();

    var worker=new Worker("./Defered_Worker.js");

    worker.onmessage=function(e)
    {
        deferred.resolve(e.data.message);
    }

    worker.postMessage({message:message});

    return deferred.promise(); 
}