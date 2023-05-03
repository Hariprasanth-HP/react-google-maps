import { useState } from "react";
import JSONToBarChart from "./JsonToBarChart";
import { Button } from "@mui/material";

function JSONToTableAndBarChart(props) {
  const { data } = props;
  const [showChart, setShowChart] = useState(true);

  return (
    <div>
      <Button variant="contained" onClick={() => setShowChart(!showChart)}>
        Chart
      </Button>
      {showChart && <JSONToBarChart data={data} />}
    </div>
  );
}
export default JSONToTableAndBarChart;
