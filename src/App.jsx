import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Addcity } from "./Components/Addcity";
import { Addcountry } from "./Components/AddCountry";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/addcity" element={<Addcity />} />
        <Route path="/addcountry" element={<Addcountry />} />
      </Routes>
    </div>
  );
}

export default App;
