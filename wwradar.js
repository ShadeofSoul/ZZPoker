var dataName = function (imgSrc, text) {
  return (
    "<span><img src=" +
    imgSrc +
    " " +
    'style="width: 50px; height: 50px; "/><br><a>' +
    text +
    "</a></span>"
  );
};

// var data2016 = [
//   [
//     17,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/350?cb=20160923150728",
//       "Rick Sanches"
//     ),
//   ],
//   [
//     19,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest/scale-to-width-down/350?cb=20210827150137",
//       "Morty"
//     ),
//   ],
//   [
//     27,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest/scale-to-width-down/340?cb=20160923151111",
//       "Jerry Smith"
//     ),
//   ],
//   [
//     38,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest/scale-to-width-down/350?cb=20191122063320",
//       "Beth Smith"
//     ),
//   ],
//   [
//     46,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/7/77/Annika.PNG/revision/latest?cb=20210810055006",
//       "Annika"
//     ),
//   ],
//   [
//     33,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/3/3e/Diane.jpg/revision/latest?cb=20171222021619",
//       "Diane"
//     ),
//   ],
//   [
//     20,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/7/74/Leonard_Smith.png/revision/latest/scale-to-width-down/350?cb=20140421044137",
//       "Leonard Smith"
//     ),
//   ],
//   [
//     40,
//     dataName(
//       "https://static.wikia.nocookie.net/rickandmorty/images/9/96/Screenshot_2015-09-29_at_10.46.55_AM.png/revision/latest/scale-to-width-down/350?cb=20150929144756",
//       "Tom Leonard"
//     ),
//   ],
// ];

Highcharts.chart("container", {
  chart: {
    polar: true,
    type: "line",
  },

  xAxis: {
    tickmarkPlacement: "on",
    lineWidth: 0,
    type: "category",
    labels: {
      useHTML: true,
      align: "center",
      distance: 30,
    },
  },

  yAxis: {
    gridLineInterpolation: "polygon",
    lineWidth: 0,
    min: 0,
    labels: {},
  },

  tooltip: {
    shared: true,
    pointFormat:
      '<span style="color:{series.color};">{series.name}: <b>{point.y:,.0f}</b><br/>',
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  series: [
    {
      data: [33, 40, 20, 11, 15, 45, 30],
      type: "area",
      dataLabels: {
        enabled: true,
        useHTML: true,
        allowOverlap: true,
        formatter() {
          if (this.point.value > 40) {
            return '<img src="https://www.highcharts.com/samples/graphics/sun.png"></img>';
          } else {
            return '<img src="https://www.highcharts.com/samples/graphics/snow.png"></img>';
          }
        },
      },
    },
  ],
});
