import "./assets/scss/style.scss";

import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="lazy-loading-bg">
            <span className="lazy-loading"></span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
