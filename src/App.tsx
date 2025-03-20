import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<div>No page is selected.</div>} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
          <Route path="*" element={<div>Page not found.</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
