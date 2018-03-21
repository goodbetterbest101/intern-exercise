exports.findMax = (arr) => {
  return arr.reduce((max, n) => n > max ? n : max, arr[0]);
}

exports.findMin = (arr) => {
  return arr.reduce((min, n) => n < min ? n : min, arr[0]);
}

let result = {};

exports.counterTen = (num) => {
    num.sort();
    let len = num.length;
    let lenMid = len % 2 === 0 ? len/2 + 1 : len/2;
    result = num.filter((number) => number < lenMid)
                    .map((number) => 10-number)
                    .filter((number) => {
                      if(num.includes(number)) return number;
                    });
    return result.length;
};

exports.reformatData = (data) => {
  let result = {};
  result = data.reduce((map, obj) => {
    map[obj.role] = [];
    name = data.filter( d => d.role === obj.role)
          .map( m => ({nickname: m.name}))
    map[obj.role] = name;
    return map;
  }, {});
  return result;
};