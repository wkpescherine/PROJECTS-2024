import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Main from "./main"
import Dashboard from "./dashboard"
import Sim from "./simulator"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Main />} />
          <Route exct path="/dashboard" element={ <Dashboard />} />
          <Route exct path="/simulator" element={ <Sim />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
