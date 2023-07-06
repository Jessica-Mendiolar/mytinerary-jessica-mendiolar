import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Cities from "./components/Cities";
import CityDetail from "./components/CityDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App lead">
      <Navbar />
      <Routes>
        <Route path="*" element={<CallToAction />}></Route>
        <Route path="/home" element={<CallToAction />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/cityDetails/:id" element={<CityDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
