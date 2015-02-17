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
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function map(array, transform) {
  return transform(array);
}

function centuryAges() {
  ages = [];
  ancestry.forEach(function(person) {
    century = Math.ceil(person.died / 100);
    var life = person.died - person.born;
    ages.push([century, life]);
  });
  return ages;
}

function ageAverages(ages) {
  listOfAges = [];
  ages.forEach(function(person) {
    listOfAges.push(person[1]);
  });
  return listOfAges;
}

function agesByCentury(array) {
  centuryObj = {};
  array.forEach(function(person) {
    if (centuryObj[person[0]] == null) {
    	centuryObj[person[0]] = [];
    }
    centuryObj[person[0]].push(person[1]);
  });
  return centuryObj;
}

function averageAgesByCentury(century) {
  for(century in centuryObj) {
    centuryObj[century] = map(centuryObj[century], average);
  }
  return centuryObj;
}

var centuryObject = agesByCentury(centuryAges());
console.log(
  averageAgesByCentury(centuryObject)
);

//ex4 - Every and then some
// TODO - refactor
function anyNaN(element, index, array, test) {
  return isNaN(element);
}

function every(array, test) {
  return array.every(anyNaN, test);
}

function some(array, test) {
  return array.some(anyNaN, test);
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
