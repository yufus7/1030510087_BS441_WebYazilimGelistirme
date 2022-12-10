import React from 'react'
import './Game.css'

import tas from "../../img/tas.png"
import kagit from "../../img/kagit.png"
import makas from "../../img/makas.png"
import { useState } from 'react'
import Scoreboard from '../Scoreboard/Scoreboard'

function Game() {
    const [select, setSelect] = useState(tas);
    const [random, setRandom] = useState(tas);
    const [player, setPlayer] = useState("");
    const [computer, setComputer] = useState(0)

    return (
        <div className='game'>
            <div className='scoreboard'>
                <Scoreboard player={player} computer={computer} />
            </div>
            <div className='game-main'>
                <div className='computer'>
                    <img style={{ width: "300px" }} src={random} alt="" />
                </div>
                <div className='player'>
                    <img style={{ width: "300px" }} src={select} alt="" />
                </div>
            </div>
            <div className='moves-main'>
                <div className='box' onClick={() => {
                    setSelect(tas);
                    setPlayer("tas");
                    setRandom(rnd(setComputer))
                }}
                >
                    <img className='obj img' src={tas} alt="" />
                </div>
                <div className='box' onClick={() => {
                    setSelect(kagit);
                    setPlayer("kagit");
                    setRandom(rnd(setComputer))
                }}>
                    <img className='obj img' src={kagit} alt="" />
                </div>
                <div className='box' onClick={() => {
                    setSelect(makas);
                    setPlayer("makas");
                    setRandom(rnd(setComputer))
                }}>
                    <img className='obj img' src={makas} alt="" />
                </div>
            </div>
        </div>
    )
}


function rnd(setComputer) {
    const moves = [tas, kagit, makas];
    const selectKey = Math.floor(Math.random() * 3);

    setComputer(selectKey);

    return moves[selectKey]
}

export default Game