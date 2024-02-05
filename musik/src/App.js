import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Main from "./main"
import Home from "./home"
import Support from "./support"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Main />} />
          <Route exct path="/home" element={ <Home />} />
          <Route exct path="/support" element={ <Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
