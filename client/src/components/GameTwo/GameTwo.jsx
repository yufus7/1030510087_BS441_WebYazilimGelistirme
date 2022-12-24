import React, { useEffect, useState } from 'react'
import './GameTwo.css'

import tas from "../../img/tas.png"
import kagit from "../../img/kagit.png"
import makas from "../../img/makas.png"

function GameTwo() {
    const [click, setClick] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(tas);
    const [selectComputer, setSelectComputer] = useState(tas);
    const [player, setPlayer] = useState("");
    const [computer, setComputer] = useState(0);
    const [playerScore, setPlayerScore] = useState(100);
    const [computerScore, setComputerScore] = useState(100);
    const [point, setPoint] = useState(0);
    const [who, setWho] = useState("")

    useEffect(() => {
        if (computer === 0) {
            if (player === "makas") {
                setWho("computer")
                setPlayerScore(playerScore - point)
            }
            else if (player === "kagit") {
                setWho("player")
                setComputerScore(computerScore - point)
            }
            else {
                setWho("scoreless")
            }
        }
        else if (computer === 1) {
            if (player === "tas") {
                setWho("computer")
                setPlayerScore(playerScore - point)
            }
            else if (player === "makas") {
                setWho("player")
                setComputerScore(computerScore - point)
            }
            else {
                setWho("scoreless")
            }
        }
        else if (computer === 2) {
            if (player === "kagit") {
                setWho("computer")
                setPlayerScore(playerScore - point)
            }
            else if (player === "tas") {
                setWho("player")
                setComputerScore(computerScore - point)
            }
            else {
                setWho("scoreless")
            }
        }


    }, [click]);


    return (
        <div >
            {(computerScore <= 0 || playerScore <= 0) ?
                <div><h1>oyun bitti</h1></div>
                : <div className='game-two'>
                    <div className='point-bar'>
                        <h1 style={{ color: "white" }}>{computerScore}</h1>
                        <h1 style={{ color: "white" }}>{playerScore}</h1>
                    </div>
                    <div className='game-two-main'>
                        <div>
                            <img className='game-two-img' src={selectComputer} alt="" />
                        </div>
                        <div className='game-two-fight'>
                            {who === "scoreless"
                                ? <div>
                                    <h1 style={{ color: "white" }}>berabere</h1>
                                </div>
                                : (point === 8
                                    ? (<h1 className={who === "computer" ? "game-two-computer" : "game-two-player"}>{point} zayıf vuruş</h1>)
                                    : (point === 12
                                        ? (<h1 className={who === "computer" ? "game-two-computer" : "game-two-player"} >{point} güçlü vuruş</h1>)
                                        : (<h1 className={who === "computer" ? "game-two-computer" : "game-two-player"} >{point}</h1>)))}
                        </div>
                        <div>
                            <img className='game-two-img' src={selectPlayer} alt="" />
                        </div>
                    </div >
                    <div className='game-two-moves'>
                        <div className='selection-box' onClick={() => {
                            setSelectPlayer(tas);
                            setPlayer("tas");
                            setSelectComputer(rnd(setComputer))
                            setPoint(rndPoint())
                            setClick(!click)
                        }}
                        >
                            <img className='obj img' src={tas} alt="" />
                        </div>
                        <div className='selection-box' onClick={() => {
                            setSelectPlayer(kagit);
                            setPlayer("kagit");
                            setSelectComputer(rnd(setComputer))
                            setPoint(rndPoint())
                            setClick(!click)
                        }}>
                            <img className='obj img' src={kagit} alt="" />
                        </div>
                        <div className='selection-box' onClick={() => {
                            setSelectPlayer(makas);
                            setPlayer("makas");
                            setSelectComputer(rnd(setComputer))
                            setPoint(rndPoint())
                            setClick(!click)
                        }}>
                            <img className='obj img' src={makas} alt="" />
                        </div>
                    </div>
                </div>}
        </div >
    )
}

function rnd(setComputer) {
    const moves = [tas, kagit, makas];
    const selectKey = Math.floor(Math.random() * 3);
    setComputer(selectKey);
    return moves[selectKey]
}

function rndPoint() {
    return Math.round(Math.random() * (12 - 8) + 8);
}

export default GameTwo