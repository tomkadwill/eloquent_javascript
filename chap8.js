// ex1
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for(;;) {
    try {
      var result = primitiveMultiply(a, b);
      break;
    } catch(e) {
      console.log('MultiplicatorUnitFailure returned an error');
    }
  }
  return result;
}

console.log(reliableMultiply(8, 8));

// ex2
function withBoxUnlocked(body) {
  box.locked = false;
  try {
    body()
  } catch(e) {
    console.log('Error - ' + e);
  } finally {
    box.locked = true;
  }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
