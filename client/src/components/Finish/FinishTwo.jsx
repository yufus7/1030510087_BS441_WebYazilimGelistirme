import React from 'react'
import './Finish.css'

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'

function FinishTwo(props) {
    const navigate = useNavigate()
    return (
        <div className="finish-main">
            <h1 style={{ color: "white" }}>Oyun Bitti!</h1>
            <h1 style={{ color: "white" }}><span style={{ color: "var(--yellow)" }}> {props.winner} </span>Kazandı</h1>

            <div className='finish-button'>
                <button className="mb-two" onClick={() => navigate(0)}>
                    Restart
                </button>

                <Link to="/mode-one">
                    <button className="mb-one">Mode One</button>
                </Link>
            </div>
        </div >
    )
}

export default FinishTwo