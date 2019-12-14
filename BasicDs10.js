//Check For The Presence of an Element With indexOf()
//indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
function quickCheck(arr, elem) {
  // change code below this line
  if(arr.indexOf(elem)>=0)
  {
    return true;
  }
  return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
