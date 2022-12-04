import './App.css';

import { Routes, Route } from "react-router-dom";
import GameModeOne from './pages/GameModeOne';
import GameModeTwo from './pages/GameModeTwo';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="modeone" element={<GameModeOne />} />
        <Route path="modetwo" element={<GameModeTwo />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
