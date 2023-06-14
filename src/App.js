import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './styles/App.css'
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
import Footer from './components/Footer';
import Cities from './components/Cities';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App lead">
      <Navbar />
      <Routes>
        <Route path="*" element={<CallToAction />}></Route>
        <Route path="/Home" element={<CallToAction />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
