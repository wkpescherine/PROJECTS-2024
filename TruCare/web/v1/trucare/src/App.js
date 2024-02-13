import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Main from "./main"
import Create from "./create"
import Dashboard from "./dashboard"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Main />} />
          <Route exct path="/create" element={ <Create />} />
          <Route exct path="/dashboard" element={ <Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
