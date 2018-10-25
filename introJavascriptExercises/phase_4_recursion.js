function range(start, end){
  if (start === end) { return [start]; }
  let starting = range(start, end - 1);
  starting.push(end);
  return starting;
}

function recSum(array) {
  if (array.length == 0) { return 0; }
  if (array.length == 1) { return array[0]; }
  let first = array.shift();
  return first + recSum(array);
}

function exp(number, exponent) {
  if (exponent === 0) { return 1; }
  return number * exp(number, exponent - 1);
}

function exp2(number, exponent) {
  if (exponent === 0) { return 1; }
  if (exponent % 2 === 0) {
    return exp2(number, exponent / 2) ** 2;
  } else {
    return number * (exp2(number, (exponent - 1) / 2) ** 2);
  }
}

function fibonacci(n) {
  const fib = [0, 1];
  if (n === 0) { return []; }
  if (n <= 2) { return fib.slice(0, n); }
  let nextFibs = fibonacci(n - 1);
  let nextNum = nextFibs.slice(-1)[0] + nextFibs.slice(-2)[0];
  nextFibs.push(nextNum);
  return nextFibs;
}

const getType = function (elem) {
  return Object.prototype.toString.call(elem).slice(8, -1);
};

function deepDup(array) {
  const dupped = [];
  array.forEach(function(el) {
    if (getType(el) === "Array") {
      dupped.push(deepDup(el));
    } else {
      dupped.push(el);
    }
  });
  return dupped;
}

function bsearch(arr, target){
  if (arr.length === 1) { return arr.indexOf(target); }
  const midpoint = Math.floor(arr.length / 2);
  console.log(midpoint);
  if (arr[midpoint] === target){
    return midpoint;
  } else if (arr[midpoint] > target) {
    return bsearch(arr.slice(0, midpoint));
  } else {
    let search = bsearch(arr.slice(midpoint + 1), target);
    if (search === -1) {
      return search;
    } else {
      return search + midpoint + 1;
    }
  }
}

function mergeSort(arr){
  if (arr.length < 2) { return arr }
  const midpoint = Math.floor(arr.length / 2);
  let left_side = mergeSort(arr.slice(0, midpoint));
  let right_side = mergeSort(arr.slice(midpoint));
  return merge(left_side, right_side);
}

function merge(left_arr, right_arr){
  const merged = [];
  while (left_arr.length > 0 && right_arr.length > 0) {
    if (left_arr[0] < right_arr[0]) {
      merged.push(left_arr.shift());
    } else {
      merged.push(right_arr.shift());
    }
  }
  let combined = left_arr.concat(right_arr);
  return merged.concat(combined);
}

function subsets(arr){
  if (arr.length === 0) { return [arr]; }
  let currentEl = arr.pop();
  let subs = subsets(arr);
  let dup = subs.slice(0);
  let shoveled = dup.map(array => array.concat(currentEl));
  return subs.concat(shoveled);
}
