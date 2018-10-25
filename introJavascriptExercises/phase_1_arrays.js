Array.prototype.myUniq = function() {
  const uniques = [];
  this.forEach(function(el) {
    if (uniques.indexOf(el) == -1) {
      uniques.push(el);
    }
  });
  return uniques;
};

Array.prototype.myTwoSum = function() {
  const positions = [];
  const array = this;
  this.forEach(function(startNum, startIndex) {
    console.log(array);
    let sliced = array.slice(startIndex, array.length);
    sliced.forEach(function(nextNum, nextIndex){
      if (startNum + nextNum === 0) {
        positions.push([startIndex, nextIndex + startIndex]);
      }
    });
  });
  return positions;
};

Array.prototype.myTranspose = function() {
  const transposed = [];
  for (let column = 0; column < this.length; column++) {
    let trans = [];
    this.forEach(function(array) {
      trans.push(array[column]);
    });
    transposed.push(trans);
  }
  return transposed;
};
