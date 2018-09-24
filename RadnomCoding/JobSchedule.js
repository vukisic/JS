/*
This problem was asked by Apple.
Implement a job scheduler which takes in a function f and an integer n,
 and calls f after n milliseconds.
 */

function test()
{
    console.log("Hi");
}

function jobScheduler(n,func)
{
    setTimeout(func,n);
}

jobScheduler(2000,test);

