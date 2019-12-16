//Mutations
function mutation(arr) {
  var secondArrelement = arr[1].toLowerCase();
  var firstArrelement = arr[0].toLowerCase();
  for (var i = 0; i < secondArrelement.length; i++) {
    if (firstArrelement.indexOf(secondArrelement[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
