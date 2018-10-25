Array.prototype.bubbleSort = function() {
  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        unsorted = true;
        let firstNum = this[i];
        let nextNum = this[i + 1];
        this[i] = nextNum;
        this[i + 1] = firstNum;
      }
    }
  }
  return this;
};

String.prototype.subStrings = function() {
  const subs = [];
  for (let startPos = 0; startPos < this.length; startPos++){
    let endPos = this.length;
    while (endPos > startPos) {
      let sliced = this.slice(startPos, endPos);
      if (subs.indexOf(sliced) == -1) {
        subs.push(sliced);
      }
      endPos--;
    }
  }
  return subs;
};
