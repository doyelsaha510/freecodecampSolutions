//Finders Keepers
//func is The pre-defined function already checks each number for us, so if it is “true”, we return that num
function findElement(arr, func) {
  let num = 0;
  
    for(var i=0;i<arr.length;i++)
    {
      num=arr[i];
      if(func(num))
      {
        return num;
      }
    }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
