import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Country from "./components/Country";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [nameCountry, setNameCountry] = useState("");

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main setNameCountry={setNameCountry} />} />
          <Route
            path={`country/${nameCountry}`}
            element={<Country nameCountry={nameCountry} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
