self.onmessage=function(e)
{
    var startTime=new Date().toTimeString();

    Sleep(2000);
    var output=e.data.message+" processed at -> "+startTime;
    self.postMessage({message:output});
}

function Sleep(milliseconds)
{
    var startTime=new Date().getTime();
    var stopTime=startTime+milliseconds;

    while(stopTime >= new Date().getTime()){ }
}