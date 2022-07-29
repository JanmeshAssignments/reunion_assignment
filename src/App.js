import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rent from "./Components/Rent/Rent";
import Navbar from "./Components/Navbar/Navbar";
import Buy from "./Components/Buy/Buy";
import Sell from "./Components/Sell/Sell";

function App() {
  return (
    <div  className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/rent" element={<Rent />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/sell" element={<Sell />}></Route>
          <Route path="/" element={<Rent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
