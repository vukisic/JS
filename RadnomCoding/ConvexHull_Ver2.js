
let ConvexHull=[];

function CrossProduct(l1,l2,p)
{
    let result=((p.y - l1.y) * (l2.x - l1.x))-((p.x - l1.x)*(l2.y - l1.y));
    if(result<0)
        return -1;
    if(result>0)
        return 1;
    return 0;
}

function SquareDistance(p,q)
{
    let value=(p.y-q.y)*(p.y-q.y)+(p.x-q.x)*(p.x-q.x);
    return value;
}

function DistanceFromLine(l1,l2,p)
{
    let value=Math.abs((p.y - l1.y)*(l2.x - l1.x) - (l2.y - l1.y)*(p.x - l1.x));
    return value;
}

function QuickConvexHull(arr,l1,l2,side)
{
    let ind=-1;
    let max_dist = 0;

    //Find max_disance point
    for(let i=0;i<arr.length;i++)
    {
        var tmp=DistanceFromLine(l1,l2,arr[i]);
        if(tmp > max_dist && CrossProduct(l1,l2,arr[i])===side)
        {
            ind=i;
            max_dist=tmp;
        }
    }

    if(ind==-1)
    {
        ConvexHull.push(l1);
        ConvexHull.push(l2);
        return;
    }

    QuickConvexHull(arr,arr[ind],l1,-CrossProduct(arr[ind],l1,l2));
    QuickConvexHull(arr,arr[ind],l2,-CrossProduct(arr[ind],l2,l1));
}

function CallQuickConvexHull(arr)
{
    if(arr.length<3)
    {
        console.log("Not Possible!");
        return;
    }

    let min_x=0;
    let max_x=0;
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i].x < arr[min_x].x)
            min_x=i;
        if(arr[i].x > arr[max_x].x)
            max_x=i;
    }

    QuickConvexHull(arr,arr[min_x],arr[max_x],1);
    QuickConvexHull(arr,arr[min_x],arr[max_x],-1);
}

let pointsArrayTemp=[{x:0,y:0},{x:1,y:3},{x:3,y:1},{x:3,y:4},{x:4,y:2},{x:4,y:3},{x:5,y:4},{x:5,y:6},
    {x:6,y:2},{x:7,y:1},{x:7,y:4},{x:7,y:6},{x:8,y:4},{x:10,y:3}];

CallQuickConvexHull(pointsArrayTemp);
let dump=[...new Set(ConvexHull)];
console.log(dump);