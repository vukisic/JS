/*
    Convex Hull

    Jarvis's Algorithm
        -> Find most left point
        -> Choose next point ,which is for all other points
            anti-clockwise oriented
        -> When your next point is starting point, Algorithm is Done!

    Complexity:
        -> O(n^2) :(
*/
function CrossProduct(p,q,r)
{
    let result=((q.y - p.y) * (r.x - q.x))-((q.x - p.x)*(r.y - q.y));
    if(result===0)
        return 0; //Colinear X
    else if(result > 0)
        return 1; //Clockwise X
    else
        return 2; //Anti-Clockwise T
}

function MostLeft(arr)
{
    let mostLeftIndex=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].x <= arr[mostLeftIndex].x)
            mostLeftIndex=i;
    }

    return mostLeftIndex;
}

function ConvexHull(arr)
{
    if(arr.length<3)
        return "Not Possible!";
    let result=[];
    let mostLeft=MostLeft(arr);
    let first=mostLeft;
    let second=0;
    let start=first;

    do
    {
        result.push(arr[first]);
        
        second=(first+1)%(arr.length);

        //Find the most anti-clockwise point
        for(let i=0;i<arr.length;i++)
        {
            if(CrossProduct(arr[first],arr[i],arr[second])==2)
            {
                second=i;
            }
                
        }

        first=second;

    }while(first!=mostLeft);

    return result;
}

let pointsArray=[{x:3,y:3},{x:0,y:0},{x:1,y:1},{x:1,y:1},{x:3,y:0},{x:2,y:2},{x:0,y:3}];

let pointsArrayTemp=[{x:0,y:0},{x:1,y:3},{x:3,y:1},{x:3,y:4},{x:4,y:2},{x:4,y:3},{x:5,y:4},{x:5,y:6},
                                            {x:6,y:2},{x:7,y:1},{x:7,y:4},{x:7,y:6},{x:8,y:4},{x:10,y:3}];
console.log(ConvexHull(pointsArrayTemp));