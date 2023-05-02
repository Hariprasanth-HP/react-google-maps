import { useState } from "react";
import JSONToBarChart from "./JsonToBarChart";
import JSONToTable from "./JsonToTable";
import { Button } from "@mui/material";

function JSONToTableAndBarChart(props) {
  const { data, chartData } = props;
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setShowChart(!showChart)}>
        Chart
      </Button>
      {true && <JSONToBarChart data={data} />}
    </div>
  );
}
export default JSONToTableAndBarChart;
