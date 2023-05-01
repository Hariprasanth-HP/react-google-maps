import { useState } from "react";
import JSONToBarChart from "./JsonToBarChart";
import JSONToPDF from "./JsonToPdf";
import JSONToTable from "./JsonToTable";
import { Button } from "@mui/material";

function JSONToTableAndBarChart(props) {
  const { data, chartData } = props;
  const [showChart, setShowChart] = useState(false);

  const handleDownloadPDF = () => {
    JSONToPDF({ data, chartData });
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setShowChart(!showChart)}>
        Chart
      </Button>
      <JSONToTable data={data} />
      {showChart && <JSONToBarChart data={chartData} />}
      <Button variant="contained" onClick={handleDownloadPDF}>
        Download PDF
      </Button>
    </div>
  );
}
export default JSONToTableAndBarChart;
