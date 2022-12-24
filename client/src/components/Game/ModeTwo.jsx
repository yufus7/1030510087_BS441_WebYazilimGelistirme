import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './ModeTwo.css'

import tas from "../../img/tas.png"
import kagit from "../../img/kagit.png"
import makas from "../../img/makas.png"

import Scoreboard from '../Scoreboard/Scoreboard'
import Finish from '../Finish/Finish'

function ModeTwo() {
    const [click, setClick] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(tas);
    const [selectComputer, setSelectComputer] = useState(tas);
    const [player, setPlayer] = useState("");
    const [computer, setComputer] = useState(0)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)

    useEffect(() => {
        if (computer === 0) {
            if (player === "makas") {
                setComputerScore(computerScore + 1)
            }
            else if (player === "kagit") {
                setPlayerScore(playerScore + 1)
            }
        }
        else if (computer === 1) {
            if (player === "tas") {
                setComputerScore(computerScore + 1)
            }
            else if (player === "makas") {
                setPlayerScore(playerScore + 1)
            }
        }
        else if (computer === 2) {
            if (player === "kagit") {
                setComputerScore(computerScore + 1)
            }
            else if (player === "tas") {
                setPlayerScore(playerScore + 1)
            }
        }


    }, [click]);


    return (
        <div>
            {(computerScore === 3 || playerScore === 3)

                ? <div className='mode-two-finish'>
                    <div className='scoreboard'>
                        <Scoreboard player={playerScore} computer={computerScore} />
                    </div>
                    <Finish winner={computerScore === 3 ? "Computer" : "Player"} />
                </div>
                : <div className='mode-two'>
                    <div className='scoreboard'>
                        <Scoreboard player={playerScore} computer={computerScore} />
                    </div>
                    <div className='mode-two-main'>
                        <div className='computer'>
                            <img style={{ width: "300px" }} src={selectComputer} alt="" />
                        </div>
                        <div className='player'>
                            <img style={{ width: "300px" }} src={selectPlayer} alt="" />
                        </div>
                    </div>
                    <div className='moves-main'>
                        <div className='box' onClick={() => {
                            setSelectPlayer(tas);
                            setPlayer("tas");
                            setSelectComputer(rnd(setComputer))
                            setClick(!click)
                        }}
                        >
                            <img className='obj img' src={tas} alt="" />
                        </div>
                        <div className='box' onClick={() => {
                            setSelectPlayer(kagit);
                            setPlayer("kagit");
                            setSelectComputer(rnd(setComputer))
                            setClick(!click)
                        }}>
                            <img className='obj img' src={kagit} alt="" />
                        </div>
                        <div className='box' onClick={() => {
                            setSelectPlayer(makas);
                            setPlayer("makas");
                            setSelectComputer(rnd(setComputer))
                            setClick(!click)
                        }}>
                            <img className='obj img' src={makas} alt="" />
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}

function rnd(setComputer) {
    const moves = [tas, kagit, makas];
    const selectKey = Math.floor(Math.random() * 3);
    setComputer(selectKey);

    return moves[selectKey]
}


export default ModeTwo