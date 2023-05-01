import React from "react";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AwsMap from "./components/Form";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import PDFChart from "./components/PDFChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AwsMap />}>
          <Route index element={<PDFChart />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
