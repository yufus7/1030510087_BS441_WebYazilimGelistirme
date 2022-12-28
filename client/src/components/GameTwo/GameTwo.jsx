import React, { useState } from 'react'
import './GameTwo.css'

import tas from "../../img/tas.png"
import kagit from "../../img/kagit.png"
import makas from "../../img/makas.png"

import FinishTwo from '../Finish/FinishTwo'
import ScoreboardTwo from '../Scoreboard/ScoreboardTwo'

function GameTwo() {
    const [click, setClick] = useState(false)
    const [selectPlayer, setSelectPlayer] = useState(tas);
    const [selectComputer, setSelectComputer] = useState(tas);
    const [player, setPlayer] = useState("");
    const [computer, setComputer] = useState(0);
    const [playerScore, setPlayerScore] = useState(100);
    const [computerScore, setComputerScore] = useState(100);
    const [point, setPoint] = useState(0);
    const [who, setWho] = useState("");

    return (
        <div >
            {
                (computerScore <= 0 || playerScore <= 0) ?
                    <div className="game-two-finish">
                        <ScoreboardTwo
                            click={click}
                            player={player}
                            computer={computer}
                            playerScore={playerScore}
                            computerScore={computerScore}
                            setPlayerScore={setPlayerScore}
                            setComputerScore={setComputerScore}
                            point={point}
                            setWho={setWho}
                        />
                        <FinishTwo winner={computerScore <= 0 ? "Player" : "Computer"} />
                    </div>
                    : <div className='game-two'>
                        <ScoreboardTwo
                            click={click}
                            player={player}
                            computer={computer}
                            playerScore={playerScore}
                            computerScore={computerScore}
                            setPlayerScore={setPlayerScore}
                            setComputerScore={setComputerScore}
                            point={point}
                            setWho={setWho}
                        />
                        <div className='game-two-main'>
                            <div>
                                <img className={who === "computer" ? "game-two-img-ok" : "game-two-img"} src={selectComputer} alt="" />
                            </div>
                            <div className='game-two-fight'>
                                {(who === "scoreless")
                                    ? (computerScore !== 100
                                        ? <div>
                                            <h2 style={{ color: "white" }}>DRAW!</h2>
                                        </div>
                                        : <div></div>)
                                    : (point === 8
                                        ? (<h2 className={who === "computer" ? "game-two-computer" : "game-two-player"}>{point} <span>LOW DAMAGE!</span></h2>)
                                        : (point === 12
                                            ? (<h2 className={who === "computer" ? "game-two-computer" : "game-two-player"} >{point} <span>HIGH DAMAGE!</span></h2>)
                                            : (<h2 className={who === "computer" ? "game-two-computer" : "game-two-player"} >{point}</h2>)))}
                            </div>
                            <div>
                                <img className={who === "player" ? "game-two-img-ok" : "game-two-img"} src={selectPlayer} alt="" />
                            </div>
                        </div >

                        {/* oyun ekranı */}
                        <div className='game-two-moves'>
                            <div className='selection-box-two' onClick={() => {
                                setSelectPlayer(tas);
                                setPlayer("tas");
                                setSelectComputer(rnd(setComputer))
                                setPoint(rndPoint())
                                setClick(!click)
                            }}
                            >
                                <img className='obj img' src={tas} alt="" />
                            </div>
                            <div className='selection-box-two' onClick={() => {
                                setSelectPlayer(kagit);
                                setPlayer("kagit");
                                setSelectComputer(rnd(setComputer))
                                setPoint(rndPoint())
                                setClick(!click)
                            }}>
                                <img className='obj img' src={kagit} alt="" />
                            </div>
                            <div className='selection-box-two' onClick={() => {
                                setSelectPlayer(makas);
                                setPlayer("makas");
                                setSelectComputer(rnd(setComputer))
                                setPoint(rndPoint())
                                setClick(!click)
                            }}>
                                <img className='obj img' src={makas} alt="" />
                            </div>
                        </div>
                    </div>
            }
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
    return Math.round(Math.random() * (13 - 8) + 8);
}

export default GameTwo