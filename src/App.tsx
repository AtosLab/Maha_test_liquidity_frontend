import TestPage from "pages/page.test";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<TestPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
