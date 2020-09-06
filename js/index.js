let element = document.querySelector(".graph-container");
const singleData = {
  chartTitle: "Single Value Bars",
  bars: [
    { label: "A", values: [1100] },
    { label: "B", values: [800] },
    { label: "C", values: [400] },
  ],
};

const stackedData = {
  chartTitle: "Stacked Value Bars",
  bars: [
    { label: "A", values: [400, 200, 100] },
    { label: "B", values: [700, 100] },
    { label: "C", values: [600, 50] },
    { label: "D", values: [400, 200, 100] },
    { label: "E", values: [700, 100] },
    { label: "F", values: [600, 200, 100] },
  ],
};

let data = stackedData;
let options = {
  graphHeight: 500,
  graphWidth: 500,
  graphTitleFontColor: "black",
  graphTitleFontSize: "medium",
  barvaluePlacement: "center",
  barValueColor: "white",
  barColors: ["#021140", "#1b578c", "#2976a6"],
  barSpacing: 0.75,
  chartAxisFontSize: "medium",
  chartAxisFontColor: "black",
};

function optionsBuilder() {
  let barPlacementResult = document.querySelector("#barValuePlacement").value;
  let barValueColorResult = document.querySelector("#barValueColor").value;
  let barSpacingResult = document.querySelector("#barSpacing").value;
  let graphTitleFontColor = document.querySelector("#graphTitleFontColor")
    .value;
  let graphTitleFontSize = document.querySelector("#graphTitleFontSize").value;
  let chartAxisFontColor = document.querySelector("#chartAxisFontColor").value;
  let chartAxisFontSize = document.querySelector("#chartAxisFontSize").value;

  options.barValuePlacement = barPlacementResult;
  options.barValueColor = barValueColorResult;
  options.barSpacing = barSpacingResult;
  options.chartAxisFontSize = chartAxisFontSize;
  options.chartAxisFontColor = chartAxisFontColor;
  options.graphTitleFontSize = graphTitleFontSize;
  options.graphTitleFontColor = graphTitleFontColor;
  drawBarChart(data, options, element);
}

$(document).ready(function () {
  optionsBuilder();
});

$("#sampleDataSet").on("change", function () {
  if (this.value === "single") {
    data = singleData;
  } else if (this.value === "stacked") {
    data = stackedData;
  }
  optionsBuilder();
});

$("#barValuePlacement").on("change", function () {
  options.barValuePlacement = this.value;
  optionsBuilder();
});

$("#barColor").on("change", function () {
  if (this.value === "red") {
    options.barColors = ["#510908", "#91100e", "#b71412"];
  } else if (this.value === "green") {
    options.barColors = ["#003543", "#046173", "#02a3a6"];
  } else if (this.value === "blue") {
    options.barColors = ["#021140", "#1b578c", "#2976a6"];
  }
  optionsBuilder();
});

$("#barValueColor").on("change", function () {
  options.barValueColor = this.value;
  optionsBuilder();
});

$("#barSpacing").on("change", function () {
  optionsBuilder();
});

$("#chartAxisFontSize").on("change", function () {
  options.chartAxisFontSize = this.value;
  optionsBuilder();
});

$("#chartAxisFontColor").on("change", function () {
  options.chartAxisFontColor = this.value;
  optionsBuilder();
});

$("#graphTitleFontColor").on("change", function () {
  options.graphTitleFontColor = this.value;
  optionsBuilder();
});

$("#graphTitleFontSize").on("change", function () {
  options.graphTitleFontSize = this.value;
  optionsBuilder();
});
