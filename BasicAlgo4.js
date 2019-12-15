//Find the Longest Word in a String
function findLongestWordLength(str) {
  var newArray=str.split(" ");
  var longest=0;
  for(var i=0;i<newArray.length;i++)
  {
    if(newArray[i].length>longest)
    {
    longest=newArray[i].length;
    }
  }

  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
