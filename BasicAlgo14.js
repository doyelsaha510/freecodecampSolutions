//Where do I Belong
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArray=arr.sort(function(a,b)
  {
    return a-b;
  });
  console.log(newArray);
  
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]>=num)
    {
      return i;
    }
  }
  
  return arr.length;
  
}

getIndexToIns([40, 60], 50);
