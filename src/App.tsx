import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigator from "components/Navigator";
import Inventory from "views/Inventory";
import Customer from "views/Customer";
import Purchase from "views/Purchase";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="customer" element={<Customer />} />
        <Route path="purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
