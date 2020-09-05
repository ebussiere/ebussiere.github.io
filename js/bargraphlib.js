//let colors = [];
//#region  Entry function
function drawBarChart(data, options, element) {
  $(".vert-number-container").empty();
  $(element).css("height", options.graphHeight);
  $(element).css("width", options.graphWidth);
  buildYAxis(yAxisValues(data), options);
  setPreRenderOptions(options);
  placeBars(data, element, options);
  setPostRenderOptions(options);
}
//#endregion

//#region Get Max Bar Value
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
//#endregion

//#region Calculate Y Axis labels from maxBarValue
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
//#endregion

//#region Options
function setPreRenderOptions() {
  //Bar Color
  if (options.barColors === "red") {
    colors = ["#510908", "#91100e", "#b71412"];
  } else if (options.barColors === "green") {
    colors = ["#003543", "#046173", "#02a3a6"];
  } else if (options.barColors === "blue") {
    colors = ["#021140", "#1b578c", "#2976a6"];
  }
}
function setPostRenderOptions() {
  //Graph Title Options
  if (options.graphTitleFontColor === "red") {
    $("#graphtitle").css("color", "red");
  } else if (options.graphTitleFontColor === "blue") {
    $("#graphtitle").css("color", "blue");
  } else if (options.graphTitleFontColor === "black") {
    $("#graphtitle").css("color", "black");
  }

  if (options.graphTitleFontSize === "small") {
    $("#graphtitle").css("font-size", "1em");
  } else if (options.graphTitleFontSize === "medium") {
    $("#graphtitle").css("font-size", "1.25em");
  } else if (options.graphTitleFontSize === "large") {
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
  } else if (options.barValueColor === "white") {
    $(".bar-value").css("color", "white");
  }

  //x and y axis options
  if (options.chartAxisFontColor === "grey") {
    $(".axis-value").css("color", "grey");
    $(".horz-number-container").css("border-top", "2px solid grey");
    $(".vert-number-container").css("border-right", "2px solid grey");
  } else if (options.chartAxisFontColor === "red") {
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
//#endregion

//#region Create Y axis labels
function buildYAxis(yAxisValues) {
  $(".vert-number-container").css("height", options.graphHeight);
  for (let i = 0; i < 6; i++) {
    $(".vert-number-container").prepend(
      `<h5 class="axis-value">${yAxisValues[i]}</h5>`
    );
  }
}
//#endregion

//#region Create Bars and bar labels
function placeBars() {
  $(element).empty();
  let elementHeight = $(element).css("height").substring(0, 3);
  let elementWidth = $(element).css("width").substring(0, 3);

  //console.log(maxy);
  $(".horz-number-container").empty();
  $("#graphtitle").text(data.bartitle);
  $(".horz-number-container").css("width", options.graphWidth);

  //For Each Data element
  for (let i = 0; i < data.values.length; i++) {
    let barValues = data.values[i].barValues;
    let maxY = yAxisValues()[5];
    console.log(maxY);
    $("#barchartpane").append(`<div class="bar-container">
  <div class="bar" id=bar${i} style="width:${
      (elementWidth * options.barSpacing) / data.values.length
    }px;">
    </div>
  </div>
</div>`);

    $(".horz-number-container").append(
      `<h5 class="axis-value">${data.values[i].barLabel}</h5>`
    );
    console.log(barValues);
    for (let j = 0; j < barValues.length; j++) {
      $(`#bar${i}`).prepend(`<div class="box box-1" id=bs${i}${j}>
      <h5 class="bar-value">${barValues[j]}</h5>`);
      $(`#bs${i}${j}`).css("background", `${colors[j]}`);
      let barSegment = `#bs${i}${j}`;
      let finalHeight = (barValues[j] * elementHeight) / maxY;
      animateBar(barSegment, finalHeight);
    }
  }
}
function animateBar(barSegment, finalHeight) {
  $(barSegment).animate(
    {
      height: 0,
      height: finalHeight,
    },
    1000,
    "swing"
  );
  //animateBar2();
}
function animateBar2(finalHeight) {
  $("#bs20").animate(
    {
      height: finalHeight,
      height: 0,
    },
    4000,
    "swing"
  );
}
