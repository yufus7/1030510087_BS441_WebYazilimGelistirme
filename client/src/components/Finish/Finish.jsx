import React from 'react'
import './Finish.css'

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'


function Finish(props) {
    const navigate = useNavigate()
    return (
        <div className="finish-main">
            <h1 style={{ color: "white" }}>Oyun Bitti!</h1>
            <h1 style={{ color: "white" }}><span style={{ color: "var(--yellow)" }}> {props.winner} </span>Kazandı</h1>

            <div className='finish-button'>
                <Link to="/modeone">
                    <button className="mb-start" onClick={() => navigate(0)}>
                        Restart
                    </button>
                </Link>

                <Link to="/modetwo">
                    <button className="mb-change-g-mode">Mode Two</button>
                </Link>
            </div>
        </div >
    )
}

export default Finish