//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  // You can do this!
  var newArray=[];
  for(var i=0;i<arr.length;i++)
  {
    var max=arr[i][0];
    for(var j=1;j<arr[i].length;j++)
    {
        if(arr[i][j]>max)
        {
          max=arr[i][j];
        }
    }
    newArray[i]=max;
  }
  return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
