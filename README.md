# Lighthouse Labs - Stretch Project

## Bar Chart Library

## About

This is a simple javascript library allowing a simple bar chart to be rendered into an element on a web page.

A customizable sample can be found here:
ebussiere.github.io

![](resources/img/chartsample.png)

## Built-In Functions

Charts can be rendered by calling the function:

```
drawBarChart(data, options, element);
```

### Data

The Data parameter takes an object consisting of:

- bartitle - string
- values - array of bar objects
  - bar objects consist of:
    - barLabel - string
    - barValues - array of a maximum of 3 values which will be stacked.

#### Example Data Object

```
const data = {
  bartitle: "Sample Values",
  values: [
    {
      barLabel: "A",
      barValues: [1100]
    },
    {
      barLabel: "B",
      barValues: [800,400,200]
    },
  ],
};
```

### Options

The options parameter takes an object consisting of:

- graphHeight - number in pixes
- graphWidth - number in pixels
- graphTitleFontColor - string ("black", "blue" or "red" currently supported)
- graphTitleFontSize - string ("small", "medium" or "large" currently supported)
- barvaluePlacement - string ("bottom", "center" or "top" currently supported)
- barValueColor - string ("black" or "white" currently supported)
- barColors: - [...] - three hex color codes in the order that they are to be used to render individual bars
- barSpacing - number between 0.5 and 1 to width of allowable space to render bars.
- chartAxisFontSize: - string ("small", "medium" or "large" currently supported),
- chartAxisFontColor - string ("grey" and "red" currently supported),

#### Example Options Object

```
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
```

### Element

- html element in which the bar chart is to be drawn.

- List the API functions that you would expect a user to use
- Describe the function and the parameters to each function

## Features

This library supports the folowing options for rendering a bar chart.

- Chart dimensions
- Chart title font color and size
- Chart axis font color and size
- Bar segment label placement and color
- Bar colors
- Spacing between adjacent bars,

## Known Issues

- Chart y axis spacing needs adjusting

## Development Roadmap

- Allow more than thre values per bar.

## External Resources

- jquery documentation
- Traversy Media YouTube Channel - jquery video tutorials
- MDN
