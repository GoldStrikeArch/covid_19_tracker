import Chart from "chart.js";

export const createChart = (node, { covidData, options } = {}) => {
  console.log(covidData.reverse());

  const totalCasesArr = covidData.map((item) => item.totalCases);
  const labelsArr = covidData.map((item) => item.dateChecked.split("T00")[0]);

  const myChart = new Chart(node, {
    type: "line",
    data: {
      labels: labelsArr,
      datasets: [
        {
          label: "Total Cases",
          data: totalCasesArr,
          fill: false,
          // backgroundColor: "red",

          borderColor: "red",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "month",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};
