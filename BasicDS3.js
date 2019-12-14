//Add Items to an Array with push() and unshift()
//the push() method adds elements to the end of an array, and unshift() adds elements to the beginning
function mixedNumbers(arr) {
  // change code below this line
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three')
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
