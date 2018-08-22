//Ex. 7 -> WebWorkers(Simulate Threading!)
/*
    WebWorker-> Process through which we can tell
    that we have a script that's likely to take 
    some time and we want to run it asynchronously.
        ->No control over thread itself
        ->Implemented through messaging system
        ->No main thread
        ->Stop worker
            -From page(worker.terminate())
            -From worker(self.close())
*/

//Detect START message
self.onmessage=function(e){
    var messageObj=e.data;
    //Detect START message
    if(messageObj.status==="START")
    {
        self.postMessage("STARTED!");
    }
    else if(messageObj.status==='STOP')
    {
        self.postMessage("STOPPED!");
    }
    else
    {
        var message=messageObj.message;
        self.postMessage(message+' Processed!');
    }
};

