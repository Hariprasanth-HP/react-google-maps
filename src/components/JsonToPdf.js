import jsPDF from "jspdf";
import "jspdf-autotable";
import Chart from "chart.js/auto";

function JSONToPDF(props) {
  const { data, chartData } = props;

  const headers = Object.keys(data[0]);
  const doc = new jsPDF();

  let y = 15;

  doc.autoTable({
    head: [headers],
    body: data,
    startY: y,
  });

  const chartCanvas = document.createElement("canvas");
  chartCanvas.width = 400;
  chartCanvas.height = 400;

  const chartContext = chartCanvas.getContext("2d");
  const chart = new Chart(chartContext, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
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

  const chartImage = chartCanvas.toDataURL("image/jpeg", 1.0);
  doc.addImage(chartImage, "JPEG", 15, y + 100, 180, 100);

  doc.save("data.pdf");
}
export default JSONToPDF;
