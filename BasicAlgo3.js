//Factorialize a Number
function factorialize(num) {
  var fact=1;
  if(num==0)
  {
    return 1;
  }
  for(var i=2;i<=num;i++)
  {
    fact=fact*i;
  }
  return fact;
  }



console.log(factorialize(5));
