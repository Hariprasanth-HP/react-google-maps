import JSONToTableAndBarChart from "./JsonToTableandBar";

const PDFChart = ({ jsonData, setShowGraph }) => {
  return (
    <div>
      <JSONToTableAndBarChart data={jsonData} chartData={jsonData} />
    </div>
  );
};

export default PDFChart;
