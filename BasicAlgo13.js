// Falsy Bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var resArray=[];
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i])
    {
      resArray.push(arr[i]);
    }
  }
  return resArray;
}

bouncer([7, "ate", "", false, 9]);
