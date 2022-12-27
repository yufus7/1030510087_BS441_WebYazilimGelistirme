import React from 'react'
import '../App.css';
import GameOne from '../components/GameOne/GameOne';
import Navbar from '../components/Navbar/Navbar';


function GameModeOne() {
    return (
        <div className="glass">
            <Navbar/>
            <GameOne />
        </div>
    )
}

export default GameModeOne