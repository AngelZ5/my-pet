import "../src/css/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Bio from "./Bio";
import Portion from "./Portion";
import CareGiver from "./CareGiver";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/bio" />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/portion" element={<Portion />} />
        <Route path="/caregiver" element={<CareGiver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
