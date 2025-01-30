import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import AppliedPage from "./pages/AppliedPage/AppliedPage";
import Navbar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/applied" element={<AppliedPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
