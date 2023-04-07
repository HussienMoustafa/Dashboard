import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Booking from "./Pages/Booking/Booking";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Register" element={<Register />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Booking" element={<Booking />}></Route>
        <Route path="Dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
