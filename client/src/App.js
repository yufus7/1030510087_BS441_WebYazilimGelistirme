import './App.css';

import { Routes, Route } from "react-router-dom";
import GameModeOne from './pages/GameModeOne';
import GameModeTwo from './pages/GameModeTwo';
import Home from './pages/Home';
import GameTwo from './components/GameTwo/GameTwo';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="mode-one" element={<GameModeOne />} />
        <Route path="mode-two" element={<GameModeTwo />} />
        <Route path="deneme" element={<GameTwo />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
