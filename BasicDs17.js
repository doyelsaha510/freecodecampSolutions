// Check if an Object has a Property
//Uses an array with all of the names which should be present in the object.
//The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
//If at least one name is not found using the hasOwnProperty method, the every method returns false.
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  return ['Alan','Jeff','Sarah','Ryan'].every(name =>
  obj.hasOwnProperty(name)
  );
  // change code above this line
}

console.log(isEveryoneHere(users));

