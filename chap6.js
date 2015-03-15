// ex1 - A vector type
function Vector(x, y) {
  this.x = x,
  this.y = y
}

Vector.prototype = {
  get length() {
    return Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2)
    );
  }
};

Vector.prototype.plus = function(vector) {
  return new Vector(
    this.x + vector.x,
    this.y + vector.y
  );
};

Vector.prototype.minus = function(vector) {
  return new Vector(
    this.x - vector.x,
    this.y - vector.y
  );
};
  
// ex2 - Another cell
function StretchCell(inner, width, height) {
  this.inner = inner,
  this.width = width,
  this.height = height
};

StretchCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};

StretchCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height - 1)
    .concat([repeat(" ", width)]);
};

// ex3 - Sequence interface
var logFive = function(seq) {
  seq.values.forEach(function(element, index, array) {
    if(index < 5) {
      console.log(element);
    }
  });
}

function ArraySeq(values) {
  this.values = values
}

function RangeSeq(start, end) {
  this.start = start,
  this.end = end
}

RangeSeq.prototype = {
  get values() {
    var list = [];
    for (var i = this.start; i <= this.end; i++) {
      list.push(i);
    }
    return list;
  }
}
