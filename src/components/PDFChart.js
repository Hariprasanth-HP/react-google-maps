import JSONToTableAndBarChart from "./JsonToTableandBar";

// const jsonData = [
//   { label: "Two Wheeler", value: 10 },
//   { label: "FourWheeler", value: 20 },
//   { label: "Cabs", value: 30 },
//   { label: "Trucks", value: 40 },
//   { label: "Buses", value: 50 },
// ];
const PDFChart = ({ jsonData, setShowGraph }) => {
  return (
    <div>
      <JSONToTableAndBarChart data={jsonData} chartData={jsonData} />
      <button onClick={() => setShowGraph(false)}>Exit</button>
    </div>
  );
};

export default PDFChart;
