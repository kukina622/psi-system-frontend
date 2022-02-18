import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigator from "components/Navigator";
import Inventory from "views/Inventory";
import Customer from "views/Customer";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="customer" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
