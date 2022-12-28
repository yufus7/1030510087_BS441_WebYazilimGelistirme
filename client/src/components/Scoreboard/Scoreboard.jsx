import React, { useEffect } from 'react'
import './Scoreboard.css'

function Scoreboard(props) {

    useEffect(() => {
        if (props.computer === 0) {
            if (props.player === "makas") {
                props.setComputerScore(props.computerScore + 1)
            }
            else if (props.player === "kagit") {
                props.setPlayerScore(props.playerScore + 1)
            }
        }
        else if (props.computer === 1) {
            if (props.player === "tas") {
                props.setComputerScore(props.computerScore + 1)
            }
            else if (props.player === "makas") {
                props.setPlayerScore(props.playerScore + 1)
            }
        }
        else if (props.computer === 2) {
            if (props.player === "kagit") {
                props.setComputerScore(props.computerScore + 1)
            }
            else if (props.player === "tas") {
                props.setPlayerScore(props.playerScore + 1)
            }
        }


    }, [props.click]);

    return (
        <div className="scoreboard">
            <div className="computer-score">
                <h2 style={{ color: "white" }}>COMPUTER: {props.computerScore}</h2>
            </div>
            <div className="player-score">
                <h2 style={{ color: "white" }}>PLAYER: {props.playerScore}</h2>
            </div>
        </div>
    )
}

export default Scoreboard