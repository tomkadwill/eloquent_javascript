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
// TODO: redo in a more elegant way
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

arrayOfAverages = []
for(name in byName) {
  person = byName[name]
  personBorn = person.born
  mother = byName[person.mother];
  if(mother != null) {
  	motherBorn = mother.born
    var difference = personBorn - motherBorn;
    arrayOfAverages.push(difference);
  }
}
