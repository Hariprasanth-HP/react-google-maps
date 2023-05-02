import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AwsMap from "./components/Form";

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
