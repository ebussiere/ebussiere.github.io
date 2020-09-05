const singleData = {
  bartitle: "Single Values",
  values: [
    { barLabel: "A", barValues: [1100] },
    { barLabel: "B", barValues: [800] },
    { barLabel: "C", barValues: [400] },
  ],
};

const stackedData = {
  bartitle: "Stacked Values",
  values: [
    { barLabel: "A", barValues: [400, 200, 100] }, //1425
    { barLabel: "B", barValues: [700, 100] }, //900
    { barLabel: "C", barValues: [600] }, //800
    { barLabel: "D", barValues: [400, 200, 100] }, //1425
    { barLabel: "E", barValues: [700, 100] }, //900
    { barLabel: "F", barValues: [600, 200, 100] }, //800
  ],
};

const refaceData = {
  bartitle: "Number of Hillarious Refaces (August 2020)",
  values: [
    { barLabel: "Geoff", barValues: [10] },
    { barLabel: "Eddy", barValues: [9] },
    { barLabel: "Bonnie", barValues: [19] },
  ],
};

const jokeData = {
  bartitle: "Number of Hillarious Jokes Told (November 1973 to present)",
  values: [
    { barLabel: "Clem", barValues: [700] },
    { barLabel: "Eddy", barValues: [650] },
    { barLabel: "Danny", barValues: [800] },
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
  let sampleDataResult = document.querySelector("#sampleDataSet").value;
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
