// ex1 - Looping a triangle
var string = '#';
for(i = 1; i <= 7; i++) {
  console.log(string);
  string += '#';
}

// ex2 - FizzBuzz
for(i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if(i % 3 === 0) {
    console.log('Fizz');
  } else if(i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i);
  }
}

// ex3 - Chess board
var size = 16;
var string = '';
for(i = 0; i < size; i++) {
  if(i % 2 === 0) {
    for(j = 0; j < size; j++) {
      if(j % 2 === 0) {
        string += '#';
      } else {
        string += ' ';
      }
    }
    string += '\n';
  } else {
    for(j = 0; j < size; j++) {
      if(j % 2 === 0) {
        string += ' ';
      } else {
        string += '#';
      }
    }
    string += '\n';
  }
}
console.log(string);
