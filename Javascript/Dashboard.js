anychart.onDocumentReady(function () {

    // add data
    var data = [
      ["2011", 4.25],
      ["2012", 13.36],
      ["2013", 800.78],
      ["2014", 372.06],
      ["2015", 595.94],
      ["2016", 1265.31],
      ["2017", 17804.50],
      ["2018", 5107.15],
      ["2019", 9356.35],
      ["2020", 36919.19],
      ["2021", 58533.66],
      ["2022", 22454.12],
      ["2023", 55914.80],
      ["2024", 86143.75]
    ];

    // create a data set
    var dataSet = anychart.data.set(data);

    // map the data for all series
    var firstSeriesData = dataSet.mapAs({x: 0, value: 1});

    // create a line chart
    var chart = anychart.line();

    // create the series and name them
    var firstSeries = chart.line(firstSeriesData);
    firstSeries.name("Bitcoin");

    // specify where to display the chart
    chart.container("payGraph");

    // draw the resulting chart
    chart.draw();

  });