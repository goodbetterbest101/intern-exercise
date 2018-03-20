exports.findMax = (arr) => {
  let max = arr[0];

  for(let i = 1, len = arr.length; i < len; i++ ) {
    let next = arr[i];
    max = (next > max) ? next : max;
  }
  return max;
};

exports.findMin = (arr) => {
  let min = arr[0];

  for(let i = 1, len = arr.length; i < len; i++ ) {
    let next = arr[i];
    min = (next < min) ? next : min;
  }
  return min;
};





