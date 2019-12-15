// Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let regex=new RegExp(target+"$","i")
  var res=regex.test(str)
  console.log(res)
  return res;
}

confirmEnding("Bastian", "n");
