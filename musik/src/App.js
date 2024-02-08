import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Main from "./main"
import Home from "./home"
import UTS from './uts';
import BSC from "./bsc";
import Planning from "./planning"
import Knowledge from "./knowledge"
import Support from "./support"
import Messages from "./messages"
import Admin from "./admin"
import Executive from "./execDashboard"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Main />} />
          <Route exct path="/home" element={ <Home />} />
          <Route exct path="/uts" element={ <UTS />} />
          <Route exct path="/bsc" element={ <BSC />} />
          <Route exct path="/planning" element={ <Planning />} />
          <Route exct path="/knowledge" element={ <Knowledge />} />
          <Route exct path="/support" element={ <Support />} />
          <Route exct path="/messages" element={ <Messages />} />
          <Route exct path="/admin" element={ <Admin />} />
          <Route exct path="/executive" element={ <Executive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
