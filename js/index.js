const singleData = {
  bartitle: "Single Bar",
  values: [{ barLabel: "a", barValues: [600, 200, 150] }],
};

const stackedData = {
  bartitle: "Stacked Bars",
  values: [
    { barLabel: "a", barValues: [600, 400, 200] }, //1200
    { barLabel: "b", barValues: [500, 400, 200] }, //750
    { barLabel: "c", barValues: [400, 300, 250] }, //770
    { barLabel: "d", barValues: [700, 500, 225] }, //1425
    { barLabel: "e", barValues: [800, 500] }, //900
    { barLabel: "f", barValues: [800, 400, 100] }, //800
    { barLabel: "g", barValues: [400] }, //800
  ],
};

//Future Option
const clusteredData = {
  bartitle: "Clustered Bars",
  values: [
    { label: "a", value1: 100 },
    { label: "b", value1: 200 },
    { label: "c", value1: 300 },
    { label: "d", value1: 400 },
    { label: "e", value1: 500 },
  ],
};
let data = stackedData;

let options = {
  graphHeight: 500,
  graphWidth: 500,
  graphTitleFontColor: "black",
  graphTitleFontSize: "medium",
  style: "single-bar",
  barvaluePlacement: "center",
  barValueColor: "white",
  barColors: ["#021140", "#1b578c", "#2976a6"],
  barSpacing: 0.75,
  chartAxisFontSize: "medium",
  chartAxisFontColor: "black",
};
let element = document.querySelector(".graph-container");

$(document).ready(function () {
  optionsBuilder();
});

function optionsBuilder() {
  let barPlacementResult = document.querySelector("#barValuePlacement").value;
  let barValueColorResult = document.querySelector("#barValueColor").value;
  let barColorResult = document.querySelector("#barColor").value;
  let barSpacingResult = document.querySelector("#barSpacing").value;
  let graphTitleFontColor = document.querySelector("#graphTitleFontColor")
    .value;
  let graphTitleFontSize = document.querySelector("#graphTitleFontSize").value;
  let chartAxisFontColor = document.querySelector("#chartAxisFontColor").value;
  let chartAxisFontSize = document.querySelector("#chartAxisFontSize").value;

  options.barValuePlacement = barPlacementResult;
  options.barColors = barColorResult;
  options.barValueColor = barValueColorResult;
  options.barSpacing = barSpacingResult;
  options.chartAxisFontSize = chartAxisFontSize;
  options.chartAxisFontColor = chartAxisFontColor;
  options.graphTitleFontSize = graphTitleFontSize;
  options.graphTitleFontColor = graphTitleFontColor;
  drawBarChart(data, options, element);
}

$("#barValuePlacement").on("change", function () {
  options.barValuePlacement = this.value;
  optionsBuilder();
});

$("#barColor").on("change", function () {
  options.barColor = this.value;
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
