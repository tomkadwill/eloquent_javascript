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
