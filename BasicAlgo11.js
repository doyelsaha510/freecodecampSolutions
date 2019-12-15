//Title Case a Sentence
function titleCase(str) {
  var newArray=str.toLowerCase().split(" ");
  var result= newArray.map(function(val)
  {
    return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
