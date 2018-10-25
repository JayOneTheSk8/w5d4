Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const mapped = [];
  this.myForEach(function(el){
    mapped.push(callback(el));
  });
  return mapped;
};

Array.prototype.myReduce = function(callback, initialVal = undefined) {
  let accumulator;
  let beginning;
  if (initialVal === undefined) {
    accumulator = this[0];
    beginning = 1;
  } else {
    accumulator = initialVal;
    beginning = 0;
  }
  for (let i = beginning; i < this.length; i++){
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};
