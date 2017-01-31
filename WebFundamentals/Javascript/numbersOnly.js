  var array = [1, "apple", -3, "orange", 0.5];
  var newArray = [];

function numbersOnly(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
function stringsOnly(array){
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

newArray = numbersOnly(array);
newArray1 = stringsOnly(array);

console.log(newArray);
console.log(newArray1);
