import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Atlas from './Pages/Atlas/Atlas.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Atlas/>} />
      </Routes>
    </>
  );
}

export default App;
