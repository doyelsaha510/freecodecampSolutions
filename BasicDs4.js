//Remove Items from an Array with pop() and shift()
//pop() removes an element from the end of an array, while shift() removes an element from the beginning. 
function popShift(arr) {
  let popped=arr.pop(); // change this line
  let shifted=arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
