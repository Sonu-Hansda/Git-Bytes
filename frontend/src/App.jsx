// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Report from './pages/Report';
import LoaderNew from './components/LoaderNew';
import Loader from './pages/Loader';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const isDeployed = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

  return (
    <Router>
      {isDeployed && (
        <div className="bg-[#eab308] text-black text-center py-2 px-4 font-mono font-bold text-sm z-50 relative neo-border">
          ⚠️ DEMO_MODE: Backend scanners are disabled in this deployed environment. To run real scans, please <a href="https://github.com/Sonu-Hansda/Git-Bytes" target="_blank" rel="noreferrer" className="underline hover:text-white">clone the GitHub repository</a> and run locally!
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Report/:paramURL" element={<Report />} />
        <Route path="/Loader" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;