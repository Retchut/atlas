import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Atlas from "./Pages/Atlas/Atlas.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/atlas" exact element={<Atlas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
