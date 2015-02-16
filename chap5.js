// ex1 - Flattening
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce(arrays, function(a, b) {
  return a.concat(b);
}, []));

//ex2 - Mother-child age difference
