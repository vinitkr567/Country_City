import "./App.css";
import {AddCountry} from "./components/addcountry";
import {AddCity} from "./components/addcity";
import {home} from "./components/home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Masai City</h1>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/add-city" element={<AddCity />} />
      </Routes>
    </div>
  );
}

export default App;