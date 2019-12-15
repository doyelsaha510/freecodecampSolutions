//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr=[];
  if(num<0)
  {
    return "";
  }
  for(var i=0;i<num;i++)
  {
    newStr.push(str);
  }
  console.log(newStr.join(""));
  return newStr.join("");
}

repeatStringNumTimes("abc", 3);
