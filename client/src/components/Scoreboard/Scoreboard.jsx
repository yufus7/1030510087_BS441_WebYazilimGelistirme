import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Scoreboard.css'

function Scoreboard(props) {
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    useEffect(() => {
        if (props.computer === 0) {
            if (props.player === "makas") {
                setComputerScore(computerScore + 1)
            }
            else if (props.player === "kagit") {
                setPlayerScore(playerScore + 1)
            }
        }
        else if (props.computer === 1) {
            if (props.player === "tas") {
                setComputerScore(computerScore + 1)
            }
            else if (props.player === "makas") {
                setPlayerScore(playerScore + 1)
            }
        }
        else if (props.computer === 2) {
            if (props.player === "kagit") {
                setComputerScore(computerScore + 1)
            }
            else if (props.player === "tas") {
                setPlayerScore(playerScore + 1)
            }
        }
    }, [props]);

    return (
        <div className="scoreboard">
            <div className="computer-score">
                <h1 style={{ color: "var(--yellow)" }}>COMPUTER: {computerScore}</h1>
            </div>
            <div className="player-score">
                <h1 style={{ color: "var(--yellow)" }}>PLAYER: {playerScore}</h1>
            </div>
        </div>
    )
}

export default Scoreboard