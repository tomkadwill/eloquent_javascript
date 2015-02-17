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

function map(array, transform, nameObj) {
  return transform(averageAges(array, nameObj));
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function averageAges(array, nameObj) {
  for(name in nameObj) {
    var person = nameObj[name];
    var personBorn = person.born;
    var mother = nameObj[person.mother];
    if(mother != null) {
      var motherBorn = mother.born;
      var difference = personBorn - motherBorn;
      array.push(difference);
    }
  }
  return array;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(map([], average, byName));

//ex3 - Historical life expectancy
