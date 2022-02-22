import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigator from "components/Navigator";
import Inventory from "views/Inventory";
import Customer from "views/Customer";
import Purchase from "views/Purchase";
import Sale from "views/Sale";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="customer" element={<Customer />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="sale" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
