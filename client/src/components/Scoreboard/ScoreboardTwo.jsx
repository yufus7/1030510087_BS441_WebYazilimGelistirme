import React, { useEffect } from 'react'
import './Scoreboard.css'

function ScoreboardTwo(props) {

    useEffect(() => {
        if (props.computer === 0) {
            if (props.player === "makas") {
                props.setWho("computer")
                if (props.point === 13) {
                    if (props.computerScore <= 90) {
                        props.setComputerScore(props.computerScore + 10)
                    } else {
                        props.setComputerScore(100)
                    }
                }
                else {
                    props.setPlayerScore(props.playerScore - props.point)
                }
            }
            else if (props.player === "kagit") {
                props.setWho("player")
                if (props.point === 13) {
                    if (props.playerScore <= 90) {
                        props.setPlayerScore(props.playerScore + 10)
                    } else {
                        props.setPlayerScore(100)
                    }

                } else {
                    props.setComputerScore(props.computerScore - props.point)
                }
            }
            else {
                props.setWho("scoreless")
            }
        }
        else if (props.computer === 1) {
            if (props.player === "tas") {
                props.setWho("computer")
                if (props.point === 13) {
                    if (props.computerScore <= 90) {
                        props.setComputerScore(props.computerScore + 10)
                    } else {
                        props.setComputerScore(100)
                    }
                }
                else {
                    props.setPlayerScore(props.playerScore - props.point)
                }
            }
            else if (props.player === "makas") {
                props.setWho("player")
                if (props.point === 13) {
                    if (props.playerScore <= 90) {
                        props.setPlayerScore(props.playerScore + 10)
                    } else {
                        props.setPlayerScore(100)
                    }

                } else {
                    props.setComputerScore(props.computerScore - props.point)
                }
            }
            else {
                props.setWho("scoreless")
            }
        }
        else if (props.computer === 2) {
            if (props.player === "kagit") {
                props.setWho("computer")
                if (props.point === 13) {
                    if (props.computerScore <= 90) {
                        props.setComputerScore(props.computerScore + 10)
                    } else {
                        props.setComputerScore(100)
                    }
                }
                else {
                    props.setPlayerScore(props.playerScore - props.point)
                }
            }
            else if (props.player === "tas") {
                props.setWho("player")
                if (props.point === 13) {
                    if (props.playerScore <= 90) {
                        props.setPlayerScore(props.playerScore + 10)
                    } else {
                        props.setPlayerScore(100)
                    }

                } else {
                    props.setComputerScore(props.computerScore - props.point)
                }
            }
            else {
                props.setWho("scoreless")
            }
        }


    }, [props.click]);

    return (
        <div className='scoreboard'>
            <div className="computer-score">
                <h2 style={{ color: "white" }}>COMPUTER: {props.computerScore < 0 ? 0 : props.computerScore}hp</h2>
            </div>
            <div className="player-score">
                <h2 style={{ color: "white" }}>PLAYER: {props.playerScore < 0 ? 0 : props.playerScore}hp</h2>
            </div>
        </div>
    )
}

export default ScoreboardTwo