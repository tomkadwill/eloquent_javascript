// ex1 - Minimum
var findMinimum = function(x, y) {
  if (x > y) {
    return y;
  } else {
    return x;
  }
}

// ex2 - Recursion
var isEven = function(number) {
  if(number === 0) {
    return true;
  } else if(number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}

// ex3 - Bean counting
var countBs = function(string) {
  count = 0;
  for(i = 0; i < string.length; i++) {
    if(isB(string[i])) {
      count++;
    }
  }
  return count;
}

var isB = function(character) {
  if (character === 'B') {
    return 1;
  } else {
    return 0;
  }
}
