// ex1 - The sum of a range
// TODO: this does not work with -1 step
var range = function(start, end, step) {
  numbers = [];
  for(i = start; i <= end; i++){
    numbers.push(i);
    if(arguments.length > 1) {
      i += (step - 1);
    }
  }
  return numbers;
}

var sum = function(numbers) {
  total = 0;
  for(i = 0; i <= numbers.length - 1; i++){
    total += numbers[i];
  }
  return total;
}

// ex2 - Reversing an array
var reverseArray = function(array) {
  newArray = [];
  arrayCopy = array
  length = array.length;
  for(i=0; i < length; i++) {
    newArray.unshift(array[0]);
    arrayCopy.shift();
  }
  return newArray;
}

var reverseArrayInPlace = function(array) {
  array = reverseArray(array);
}

// ex3 - A list
// array to list
var createObject = function(obj, value) {
  if(obj.rest === undefined) {
    obj.value = value;
    obj.rest = null;
  } else if(obj.rest === null) {
    obj.rest = {
      value: value,
      rest: null
    }
  } else {
    obj.rest = createObject(obj.rest, value);
  }

  return obj
}

var arrayToList = function(array) {
  var newObj = {};
  for(i=0; i < array.length; i++) {
    newObj = createObject(newObj, array[i]);
  }

  return newObj;
}

// list to array
var traverseList = function(list, newArray) {
  if(list.rest === null) {
    newArray.push(list.value);
  } else {
    newArray.push(list.value);
    newArray = traverseList(list.rest, newArray);
  }

  return newArray;
}

var listToArray = function(list) {
  var newArray = [];
  var newList = list;
  return traverseList(newList, newArray);
}
