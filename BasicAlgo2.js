//Reverse a String
function reverseString(str) {
let newString="";
let i;
  for(i=str.length-1;i>=0;i--)
  {
    newString+=str[i];
  }
  return newString;
}

reverseString("hello");

