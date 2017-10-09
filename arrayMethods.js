function isString(element) {
    return typeof element === 'string';
}

let arrayMethods = function () {
  let arr = [1, 2, 3, {testNumber: 1}, 'string', [1, 2, 3], null, NaN, undefined];

  console.log('Before pop method: ', arr);
  arr.pop();
  console.log('After pop method: ', arr);

  console.log('Before push method: ', arr);
  arr.push('push');
  console.log('After push method: ', arr);

  let firstArray = [1, 2, 3];
  let secondArray = [4, 5, 6];
  console.log('Before concat method: ', firstArray, secondArray);
  console.log('After concat method: ', firstArray.concat(secondArray));

  console.log('Before indexOf method: ', arr);
  console.log('Result method indexOf: ', arr.indexOf('string'));

  console.log('Before join method: ', arr);
  console.log('After join method: ', arr.join(' * '));

  console.log('Before forEach method: ', arr);
  let forEachRes = [];
  arr.forEach(function (t) {
      forEachRes.push(typeof t);
  });
  console.log('After forEach method: ', forEachRes);

  console.log('Before filter method: ', arr);
  let filterResult = arr.filter(function (t) {
      return typeof t === 'number';
  });
  console.log('After filter method: ', filterResult);

  console.log('Before map method: ', arr);
  let mapResult = arr.map(function (t) {
      if(typeof t === 'number') {
          return t * 2;
      }
      return t;
  });
  console.log('After map method: ', mapResult);

  console.log('Before slice method: ', arr);
  let sliceResult = arr.slice(5, arr.length);
  console.log('After slice method: ', sliceResult);

  let spliceResult = arr.splice(0, 1, 'test');
  console.log('Splice result: ', spliceResult);
  console.log('Arr after splice: ', arr);

  console.log('Method shift: ', arr.shift());
  console.log('Arr after shift: ', arr);

  console.log('Method un shift: ', arr.unshift('test'));
  console.log('Arr after un shift: ', arr);

  console.log('Before every/some methods: ', arr);
  console.log('Method un every: ', arr.every(isString));
  console.log('Method un some: ', arr.some(isString));

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log('Before reduce methods: ', arr);
  let reduceResult = arr.reduce(function (sum, current) {
      return sum += current;
  }, 0);
  console.log('After reduce method: ', reduceResult);

  console.log('Before reduce methods: ', arr);
  let findResult = arr.find(function (el) {
      return el % 3 === 0;
  });
  console.log('Result find method: ', findResult);
};