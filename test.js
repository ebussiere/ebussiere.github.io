const data = {
  bartitle: "Single Bar",
  values: [{ barLabel: "a", barValues: [600, 50, 20] }],
};

let maxBarValue = function () {
  let barValueTotals = [];
  let myArray = Array.from(data.values);
  for (let i = 0; i < myArray.length; i++) {
    let barTotal = myArray[i].barValues;
    barValueTotals.push(barTotal.reduce(myFunc));
    function myFunc(total, num) {
      return total + num;
    }
  }
  let maxBarValueTotal = barValueTotals.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return maxBarValueTotal;
};

const yAxisValues = function (data) {
  var result = [];
  const Increments = [1, 2, 5];
  let res = 0;
  let resArray = [-1, -1];
  let p = 0;
  let maxV = maxBarValue(data);
  while (res < maxV) {
    for (let i = 0; i < Increments.length; i++) {
      res = Increments[i] * 10 ** p;
      if (maxV > resArray[0] && maxV < resArray[1]) {
      } else {
        resArray[0] = resArray[1];
        resArray[1] = res;
      }
    }
    p++;
  }
  for (let i = 0; i <= 5; i++) {
    result.push((resArray[1] / 5) * i);
  }
  return result;
};
console.log(yAxisValues());
