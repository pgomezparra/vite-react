import React from "react";
import { Routes, Route } from "react-router-dom";

import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";

export function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </React.Fragment>
  );
}
