const data = [
  "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/350?cb=20160923150728",
  "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest/scale-to-width-down/350?cb=20210827150137",
  "https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest/scale-to-width-down/340?cb=20160923151111",
  "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/350?cb=20160923150728",
  "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest/scale-to-width-down/350?cb=20210827150137",
  "https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest/scale-to-width-down/340?cb=20160923151111",
  "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/350?cb=20160923150728",
  "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest/scale-to-width-down/350?cb=20210827150137",
  "https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest/scale-to-width-down/340?cb=20160923151111",
  "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest/scale-to-width-down/350?cb=20160923150728",
  "https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest/scale-to-width-down/350?cb=20210827150137",
  "https://static.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest/scale-to-width-down/340?cb=20160923151111",
];

function loadImageSet(arr) {
  const set = arr.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });
  return set;
}

function x() {
  return 65;
}

var ctx = document.getElementById("chart").getContext("2d");

var chart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "font",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
        data: [10, 20, 30, 25, 40, 50, 15, 20, 43, 32],
      },
      {
        label: "material",
        // backgroundColor: "rgba(250, 250, 0, 0.2)",
        borderColor: "rgb(250, 250, 0)",
        borderWidth: 1,
        data: [20, 50, 0, 10, 8, 49, 40, 22, 33, 40],
      },
    ],
    fill: true,
  },
  options: {
    plugins: {
      legend: {
        align: "start",
      },
    },
    layout: {
      padding: x(),
    },
  },
  plugins: [
    {
      id: "custom_labels",
      afterDraw: (chart, args) => {
        if (data) {
          const scale = chart.scales.r;
          drawTextAtIndex(scale, 0, "test0");
          drawTextAtIndex(scale, 1, "test1");
          drawTextAtIndex(scale, 2, "test2");
          drawTextAtIndex(scale, 3, "test3");
          drawTextAtIndex(scale, 4, "test4");
          drawTextAtIndex(scale, 5, "test5");
          drawTextAtIndex(scale, 6, "test1");
          drawTextAtIndex(scale, 7, "test2");
          drawTextAtIndex(scale, 8, "test3");
          drawTextAtIndex(scale, 9, "test4");
        } else {
          image.onload = () => chart.draw();
        }
      },
    },
  ],
});

function drawTextAtIndex(scale, index, text) {
  const offset = 45;
  const r = scale.drawingArea + offset;
  const angle = scale.getIndexAngle(index) - Math.PI / 2;
  const x = scale.xCenter + Math.cos(angle) * r;
  const y = scale.yCenter + Math.sin(angle) * r;
  const ctx = scale.ctx;
  ctx.save();
  ctx.translate(x, y);
  //ctx.rotate(angle + Math.PI / 2);
  ctx.textAlign = "center";

  ctx.fillStyle = "blue";
  ctx.font = "40px material-icons";
  ctx.drawImage(loadImageSet(data)[index], -20, -30, 50, 50);

  ctx.font = "16px 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
  ctx.fillStyle = "black";
  ctx.fillText(text, 5, 30);
  ctx.restore();
}
