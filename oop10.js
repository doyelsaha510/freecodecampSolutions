//Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs=4;

// Add your code above this line
let beagle = new Dog("Snoopy");
