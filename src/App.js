import React from "react";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AwsMap from "./components/Form";

import PDFChart from "./components/PDFChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AwsMap />} />
      </Routes>
    </Router>
  );
}
export default App;
