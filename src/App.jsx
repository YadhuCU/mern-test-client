import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
