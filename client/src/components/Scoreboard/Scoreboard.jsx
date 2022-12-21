import React from 'react'
import './Scoreboard.css'

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <div className="computer-score">
                <h1 style={{ color: "var(--yellow)" }}>COMPUTER: {props.computer}</h1>
            </div>
            <div className="player-score">
                <h1 style={{ color: "var(--yellow)" }}>PLAYER: {props.player}</h1>
            </div>
        </div>
    )
}

export default Scoreboard