import JSONToTableAndBarChart from "./JsonToTableandBar";

const PDFChart = ({ jsonData, setShowGraph }) => {
  return (
    <div>
      <JSONToTableAndBarChart data={jsonData} chartData={jsonData} />
      <button onClick={() => setShowGraph(false)}>Exit</button>
    </div>
  );
};

export default PDFChart;
