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


let result = {};

exports.reformatData = (data) => {
  for (let i = 0, len = data.length; i < len; i++) {
    let nick = {};
    dataRole = data[i].role;
    dataName = data[i].name;
    
    if (data[i].role in result) {
      nick["nickname"] = dataName;
      result[dataRole].push(nick);
    } else {
      nick["nickname"] = dataName;
      result[dataRole] = new Array();
      result[dataRole].push(nick);
    }
  }
  
  return result;
};

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

exports.counterTen = (num) => {
  let count = 0;
  num.sort();
  for (let i = 0, len = num.length/2; i < len; i++) {
    let sum = 10 - num[i];
    if (sum in num) count++;
  }
  return count;
};