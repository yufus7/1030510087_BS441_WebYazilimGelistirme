import React from "react";
import { useState } from "react";
import "./GameOne.css";

import tas from "../../img/tas.png";
import kagit from "../../img/kagit.png";
import makas from "../../img/makas.png";

import Scoreboard from "../Scoreboard/Scoreboard";
import FinishOne from "../Finish/FinishOne";

function ModeOne() {
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(tas);
    const [random, setRandom] = useState(tas);
    const [player, setPlayer] = useState("");
    const [computer, setComputer] = useState(0);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    return (
        <div>
            {computerScore === 3 || playerScore === 3 ? (
                <div className="game-one-finish">
                    <Scoreboard
                        click={click}
                        player={player}
                        computer={computer}
                        playerScore={playerScore}
                        computerScore={computerScore}
                        setPlayerScore={setPlayerScore}
                        setComputerScore={setComputerScore}
                    />
                    <FinishOne winner={computerScore === 3 ? "Computer" : "Player"} />
                </div>
            ) : (
                <div className="game-one">
                    <Scoreboard
                        click={click}
                        player={player}
                        computer={computer}
                        playerScore={playerScore}
                        computerScore={computerScore}
                        setPlayerScore={setPlayerScore}
                        setComputerScore={setComputerScore}
                    />
                    <div className="game-one-main">
                        <div className="computer">
                            <img style={{ width: "300px" }} src={random} alt="computer" />
                        </div>
                        <div className="player">
                            <img style={{ width: "300px" }} src={select} alt="player" />
                        </div>
                    </div>
                    <div className="game-one-moves">
                        <div
                            className="selection-box-one"
                            onClick={() => {
                                setSelect(tas);
                                setPlayer("tas");
                                setRandom(rnd(setComputer));
                                setClick(!click);
                            }}
                        >
                            <img className="obj img" src={tas} alt="" />
                        </div>
                        <div
                            className="selection-box-one"
                            onClick={() => {
                                setSelect(kagit);
                                setPlayer("kagit");
                                setRandom(rnd(setComputer));
                                setClick(!click);
                            }}
                        >
                            <img className="obj img" src={kagit} alt="" />
                        </div>
                        <div
                            className="selection-box-one"
                            onClick={() => {
                                setSelect(makas);
                                setPlayer("makas");
                                setRandom(rnd(setComputer));
                                setClick(!click);
                            }}
                        >
                            <img className="obj img" src={makas} alt="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function rnd(setComputer) {
    const moves = [tas, kagit, makas];
    const selectKey = Math.floor(Math.random() * 3);

    setComputer(selectKey);
    return moves[selectKey];
}

export default ModeOne;
