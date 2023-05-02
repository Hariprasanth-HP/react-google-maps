import ReactDOM from "react-dom";
import { Bar, Doughnut } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";

import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
function JSONToBarChart(props) {
  const { data } = props;
  const labels = data.map((item) => item.Vehicle);
  const values = data.map((item) => item.Accidents);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Bar Chart",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const div2PDF = (e) => {
    const but = e.target;
    but.style.display = "none";
    let input = window.document.getElementsByClassName("div2PDF")[0];

    html2canvas(input).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "pt");
      pdf.addImage(
        img,
        "png",
        input.offsetLeft,
        input.offsetTop,
        input.clientWidth,
        input.clientHeight
      );
      pdf.save("chart.pdf");
      but.style.display = "block";
    });
  };
  const headers = Object.keys(data[0]);

  return (
    <div>
      <div className="div2PDF">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th style={{ border: "2px solid" }} key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header, index) => (
                  <td style={{ border: "2px solid" }} key={index}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Chart",
              fontSize: 32,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
          height={200}
        />
      </div>
      <Button onClick={(e) => div2PDF(e)}>Export 2 PDF</Button>
    </div>
  );
}
export default JSONToBarChart;
