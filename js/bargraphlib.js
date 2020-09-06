//Entry function
function drawBarChart(data, options, element) {
  $(".vert-number-container").empty();
  $(element).css("height", options.graphHeight);
  $(element).css("width", options.graphWidth);
  buildYAxis(yAxisValues(data), options);
  setPreRenderOptions(options);
  placeBars(data, element, options);
  setPostRenderOptions(options);
}

//Get Max Bar Value
let maxBarValue = function () {
  let barValueTotals = [];
  let myArray = Array.from(data.bars);
  for (let i = 0; i < myArray.length; i++) {
    let barTotal = myArray[i].values;
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

//Calculate Y Axis labels from maxBarValue
const yAxisValues = function (data) {
  var result = [];
  const incrementPrefixes = [1, 2, 5];
  let currentResult = 0;
  let resArray = [-1, -1];
  let p = 0;
  let maxV = maxBarValue(data);
  while (currentResult < maxV) {
    for (let i = 0; i < incrementPrefixes.length; i++) {
      currentResult = incrementPrefixes[i] * 10 ** p;
      if (maxV > resArray[0] && maxV < resArray[1]) {
      } else {
        resArray[0] = resArray[1];
        resArray[1] = currentResult;
      }
    }
    p++;
  }
  for (let i = 0; i <= 5; i++) {
    result.push((resArray[1] / 5) * i);
  }
  return result;
};

//Options
function setPreRenderOptions() {
  //Bar Color
  colors = Array.from(options.barColors);
}
function setPostRenderOptions() {
  //Graph Title Options
  if (options.graphTitleFontColor === "red") {
    $("#graphtitle").css("color", "red");
  } else if (options.graphTitleFontColor === "blue") {
    $("#graphtitle").css("color", "blue");
  } else {
    $("#graphtitle").css("color", "black");
  }

  if (options.graphTitleFontSize === "small") {
    $("#graphtitle").css("font-size", "1em");
  } else if (options.graphTitleFontSize === "medium") {
    $("#graphtitle").css("font-size", "1.25em");
  } else {
    $("#graphtitle").css("font-size", "1.5em");
  }

  if (options.barValuePlacement === "top") {
    $(".bar-value").css("align-self", "flex-start");
  } else if (options.barValuePlacement === "center") {
    $(".bar-value").css("align-self", "center");
  } else {
    $(".bar-value").css("align-self", "flex-end");
  }

  //Bar internal Value Color
  if (options.barValueColor === "black") {
    $(".bar-value").css("color", "black");
  } else {
    $(".bar-value").css("color", "white");
  }

  //x and y axis options
  if (options.chartAxisFontColor === "grey") {
    $(".axis-value").css("color", "grey");
    $(".horz-number-container").css("border-top", "2px solid grey");
    $(".vert-number-container").css("border-right", "2px solid grey");
  } else {
    $(".axis-value").css("color", "red");
    $(".horz-number-container").css("border-top", "2px solid red");
    $(".vert-number-container").css("border-right", "2px solid red");
  }
  if (options.chartAxisFontSize === "small") {
    $(".axis-value").css("font-size", "1rem");
  } else if (options.chartAxisFontSize === "medium") {
    $(".axis-value").css("font-size", "1.25rem");
  } else {
    $(".axis-value").css("font-size", "1.5rem");
  }
}

//Create Y axis labels
function buildYAxis(yAxisValues) {
  $(".vert-number-container").css("height", options.graphHeight);
  for (let i = 0; i < 6; i++) {
    $(".vert-number-container").prepend(
      `<h5 class="axis-value">${yAxisValues[i]}</h5>`
    );
  }
}

//Create Bars and bar labels
function placeBars() {
  $(element).empty();
  let elementHeight = $(element).css("height").substring(0, 3);
  let elementWidth = $(element).css("width").substring(0, 3);

  $(".horz-number-container").empty();
  $("#graphtitle").text(data.chartTitle);
  $(".horz-number-container").css("width", options.graphWidth);

  //For each bar
  for (let i = 0; i < data.bars.length; i++) {
    let values = data.bars[i].values;
    let maxY = yAxisValues()[5];
    $("#barchartpane").append(`<div class="bar-container">
  <div class="bar" id=bar${i} style="width:${
      (elementWidth * options.barSpacing) / data.bars.length
    }px;">
    </div>
  </div>
</div>`);
    $(".horz-number-container").append(
      `<h5 class="axis-value">${data.bars[i].label}</h5>`
    );
    for (let j = 0; j < values.length; j++) {
      $(`#bar${i}`).prepend(`<div class="box bar-segment" id=bs${i}${j}>
      <h5 class="bar-value">${values[j]}</h5>`);
      $(`#bs${i}${j}`).css("background", `${colors[j]}`);
      let barSegment = `#bs${i}${j}`;
      let finalHeight = (values[j] * elementHeight) / maxY;
      animateBar(barSegment, finalHeight);
    }
  }
}
//Animate bars from 0 height to calculated height in one second
function animateBar(barSegment, finalHeight) {
  $(barSegment).animate(
    {
      height: 0,
      height: finalHeight,
    },
    1000,
    "swing"
  );
}
