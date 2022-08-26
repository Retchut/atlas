import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Showcase from './Pages/Showcase/Showcase.jsx';
import Atlas from './Pages/Atlas/Atlas.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Atlas/>} />
        <Route path="/showcase" exact element={<Showcase />} />
      </Routes>
    </>
  );
}

export default App;
