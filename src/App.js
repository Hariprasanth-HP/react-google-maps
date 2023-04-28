import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AwsMap from "./components/Form";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AwsMap />}>
          <Route index element={<AwsMap />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
